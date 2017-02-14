'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Upload Schema
 */
var ShoppaymentSchema = new Schema({
	session: {
		type: String,
		default: '',
	},
	filename: {
		type: String,
		default: '',
		required: 'Please specify original file name',
		trim: true
	},
	location: {
		type: String,
		default: '',
		required: 'Please specify file location',
	},
	url: {
		type: String,
		default: '',
	},
	versions: {},
	size: {
		type: Number,
	},
	created: {
		type: Date,
		default: Date.now
	},
	anonymous: {
		type: Boolean,
		default: true
	},
	desc: {
		type: String,
		trim: true,
		default: 'N/A'
	},
	refId: {
		type: String,
		trim: true,
		default: null
	},
	shop: {
		type: Schema.ObjectId,
		ref: 'Shop'
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	totalAmount: {
		type: Number,
		default: 0
	},
	invoiceDetails: {
		type: Array,
	}
	
});

mongoose.model('Shoppayment', ShoppaymentSchema);
