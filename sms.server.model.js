'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


/**
 * SMS Schema
 */
var SmsSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	to: {
		type: String,
		default: null,
		trim: true
	},
	from: {
		type: String,
		default: null,
		trim: true
	},
	readBy: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	text: {
		type: String,
		default: null,
		trim: true
	},
	time: {
		type: Date,
		default: null,
		trim: true
	},
	client: {
		type: Schema.ObjectId,
		ref: 'Offender'
	},
	clientName: {
		type: String,
		default: null,
		trim: true
	},
	textId: {
		type: String,
		default: null,
		trim: true
	},
	direction: {
		type: String,
		default: null,
		trim: true
	},
	status: {
		type: String,
		default: null,
		trim: true
	},
});

mongoose.model('SMS', SmsSchema);