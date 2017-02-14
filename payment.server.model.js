'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var Change = mongoose.model('Change');
var moment = require('moment');
var nextMonth = moment().add(5, 'days').hours(0).minutes(0).seconds(0);

/**
 * Tax Schema
 */
var TaxSchema = new Schema({
	
	taxType: {
		type: String,
		default: ''
	},
		taxPerc: {
		type: Number,
		default: 0
	}

});

mongoose.model('Tax', TaxSchema);



/**
 * Payment Schema
 */
var PaymentSchema = new Schema({
	offender: {
		type: Schema.ObjectId,
		ref: 'Offender'
	},
	workorder: {
		type: Schema.ObjectId,
		ref: 'Workorder'
	},
	created: {
		type: Date,
		default: Date.now
	},
	dueDate: {
		type: Date,
		default: nextMonth
	},
	paidDate: {
		type: Date,
		default: null
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	pmtType: {
		type: String,
		trim: true
	},
	pmtOpt: {
		type: String,
		trim: true
	}, 
	amount: {
		type: Number,
		default: 0
	},
	status: {
		type: String,
		trim: true
	},
	notes: {
		type: String,
		trim: true
	},
	authCode: {
		type: String,
		trim: true
	},
	transId: {
		type: String,
		trim: true
	},
	taxDetails: [TaxSchema.schema],
	totalTax: {
		type: Number,
		default: 0 
	},
	totalCharge: {
		type: Number,
		default: 0
	},
	appliedCredits: {
		type: Number,
		default: 0
	}, 
	lateFee: {
		type: Boolean,
		default: false
	},
	violationsCharged: {
		type: Boolean,
		default: false
	}

});


// PaymentSchema.pre('save', function(next) {

// 	console.log('Payment about to be saved');
// 	var _this = this;
// 	console.log(_this);

// 	if(_this._id){
// 		var displayName = '';
// 		var userId = '';

// 		if(_this.user && _this.user.displayName){
// 			displayName = _this.user.displayName;
// 			userId = _this.user._id;
// 		} 

// 		console.log('This is an existing payment - we need to add a log entry', _this._id);
// 		_this.constructor.find({_id: _this._id}).exec(function(err, pmt){
// 			console.log("err", err);
// 			console.log(pmt);
// 			if(pmt.length > 0){
// 				console.log('Have an actual payment...', pmt[0]);
// 				var payment = pmt[0];

// 				// var keys = Object.keys( payment.constructor);
// 				// console.log('PC', keys);

// 				// var keys = Object.keys(payment);
// 				// console.log('PMTSssss', keys);

// 				// console.log('Payment.doc', payment._doc);
// 				// console.log(Object.getOwnPropertyNames(payment._doc));

// 				var keys = Object.keys(payment._doc);
// 				console.log('Keys???: ', keys);
// 				var changeLog = [];
// 				//Go through each key
// 				for(var i=0;i < keys.length; i++){
// 					// console.log(keys[i]);
// 					var keyName = keys[i];
// 					if(keyName === 'taxDetails') continue;
// 					if(keyName === 'user') continue;
// 					if(keyName === 'notes') continue;
// 					// if(keyName === '_id'){
// 					// 	console.log('_id key...what to do here...', keyName);
// 					// }
					
// 					var existingKey = JSON.stringify(payment[keyName]);
// 					var newKey = JSON.stringify(_this[keyName]);

// 					if(existingKey!==newKey){
// 						console.log(keyName+' is changing from '+ existingKey+' to '+newKey);
// 						var changeDetails = {
// 							name: keyName,
// 							oldValue: existingKey,
// 							newValue: newKey
// 						};

// 						changeLog.push(changeDetails);
// 						// changeLog[keyName]['old'] = existingKey;
// 						// changeLog[keyName]['new'] = newKey;

// 					}else{
// 						console.log(keyName+' is not changin');
// 					}

// 					if(keyName === 'user'){
// 						// console.log('user key...what to do here...', payment[keyName]);
// 						// console.log('user key...what to do here...', _this[keyName]);
// 						var stuff = _this[keyName];
// 						if(stuff && stuff._id) {
// 							// console.log('Noting to worry about');
// 							console.log(stuff._id);
// 							console.log(payment[keyName]);
// 							if(stuff._id.toString()==payment[keyName].toString()){
// 								console.log('Id match 166');
// 							}else{
// 								console.log('ID DO NOT MATCH 168');
// 							}

// 						}else{
// 							// console.log('Oh fuck');
// 							// stuff = JSON.parse(stuff);
// 							console.log('No Stuff._id - WHAT THE FUCK??? 174', stuff);
// 							if(stuff._id==payment[keyName]){
// 								console.log('Id match 176x');
// 							}else{
// 								console.log('ID DO NOT MATCH 178');
// 							}

// 						}
// 					}
					
// 					// console.log(_this[keyName]);
// 				}

// 			}

// 			console.log('Who did it?', displayName);
// 			console.log('ChangeLog: ', changeLog);
// 			if(changeLog && changeLog.length > 0){

// 				var changes = new Change({
// 				user: userId,
// 			 	displayName: displayName,
// 			 	changeType: 'Payment',
// 			 	pmtId: _this._id,
// 			 	changeDetails: changeLog,
// 			 	offender: _this.offender
// 			});

		
			
// 			changes.save(function(err, change2){
// 				console.log(err);
// 				console.log(change2);
// 				next();
// 			});
// 			}else{
// 				next();
// 			}
			
			
// 		});
// 	}else{
// 		console.log('This is not an existing payment');
// 		next();
// 	}
	
// 	});

mongoose.model('Payment', PaymentSchema);