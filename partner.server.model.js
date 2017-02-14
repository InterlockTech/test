'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Partner Schema
 */
var PartnerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		required: 'Please fill Partner First Name',
		trim: true
	},
		lastName: {
		type: String,
		default: '',
		required: 'Please fill Partner Last Name',
		trim: true
	},
		firmName: {
		type: String,
		default: '',
		required: 'Please fill Partner Firm Name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	displayName: {
		type: String,
		trim: true
		
	},
	mainPhone: {
		type: String,
		trim: true
	},
		altPhone: {
		type: String,
		trim: true
	},
		emailAddress: {
		type: String,
		trim: true
	},
	notes: {
		type: String,
		trim: true, 
		default: null
	}, 
		address: {
		type: String,
		trim: true, 
		default: null
	},
			city: {
		type: String,
		trim: true, 
		default: null
	},
			state: {
		type: String,
		trim: true, 
		default: null
	},
		zipcode: {
		type: String,
		trim: true, 
		default: null
	},
		salesRep: {
		type: String,
		trim: true, 
		default: null
	},

});

mongoose.model('Partner', PartnerSchema);

