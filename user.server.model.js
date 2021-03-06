'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

/**
 * A Validation function for local strategy properties
 */
var validateLocalStrategyProperty = function(property) {
	return ((this.provider !== 'local' && !this.updated) || property.length);
};

/**
 * A Validation function for local strategy password
 */
var validateLocalStrategyPassword = function(password) {
	return (this.provider !== 'local' || (password && password.length > 6));
};

/**
 * User Schema
 */
var UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your first name']
	},
	lastName: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your last name']
	},
	displayName: {
		type: String,
		trim: true
	},
	token: {
		type: String,
		trim: true,
		default: null
	},
	portal: {
		type: String,
		default: 'test'
	},
	telephone: {
		type: String,
		trim: true,
		default: '(844) 551-4883'
	},
	email: {
		type: String,
		trim: true,
		default: '',
		validate: [validateLocalStrategyProperty, 'Please fill in your email'],
		match: [/.+\@.+\..+/, 'Please fill a valid email address']
	},
	username: {
		type: String,
		unique: true,
		required: 'Please fill in a username',
		trim: true
	},
	password: {
		type: String,
		default: '',
		validate: [validateLocalStrategyPassword, 'Password should be longer']
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	shop: {
		
		type: Schema.ObjectId,
		ref: 'Shop'
	
	},
	client: {
		
		type: Schema.ObjectId,
		ref: 'Offender'
	
	},
	providerData: {},
	additionalProvidersData: {},
	roles: {
		type: [{
			type: String,
			enum: ['user', 'admin', 'shop']
		}],
		default: ['user']
	},
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	},
	pushToken: {
		type: String,
		default: null
	},
	notifications: [{

		note: String,
		default: ''
	},
	{
		date: Date,
		default: Date.now
	}
	]
});

/**
 * Hook a pre save method to hash the password
 */
// UserSchema.pre('save', function(next) {

// 		if(!this.reusePassword){
// 			if (this.password && this.password.length > 6) {
// 				this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
// 				this.password = this.hashPassword(this.password);

// 			}
// 		}

// 	next();
// });
UserSchema.pre('save', function(next) {

		if(!this.reusePassword ){
			if(!this.resetPassword){
			if (this.password && this.password.length > 6) {
				this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
				this.password = this.hashPassword(this.password);
				next();
			}
		}else{
			//console.log('Resetting Password');
			//console.log('Current Salt', this.salt);
			if (this.password && this.password.length > 6) {
				//this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
				console.log('Password before hash',this.password);
				this.password = this.hashPassword(this.password);
				console.log('Password after hash',this.password);
				//console.log('Salt right now', this.salt);
				next();
			}
			next();

		}

		

	next();
}
next();
});


/**
 * Create instance method for hashing a password
 */
UserSchema.methods.hashPassword = function(password) {
	if (this.salt && password) {
		return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
	} else {
		return password;
	}
};

/**
 * Create instance method for authenticating user
 */
UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

/**
 * Find possible not used username
 */
UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne({
		username: possibleUsername
	}, function(err, user) {
		if (!err) {
			if (!user) {
				callback(possibleUsername);
			} else {
				return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

mongoose.model('User', UserSchema);