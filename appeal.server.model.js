'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Appeal Schema
 */
var AppealSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Appeal name',
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
	deviceData: {
		type: Schema.ObjectId,
		ref: 'DeviceData'
	},
	line: {
		type: String,
		default: null,
		trim: true
	},
	reviewDetails: {
		type: String,
		default: null,
		trim: true
	},
	notes: {
		type: String,
		default: null,
		trim: true
	},
	verdictApproved: {
		type: Boolean,
		default: null
	},
	whoRuled: {
		type: Schema.ObjectId,
		ref: 'User'
	}, 
	verdictDate: {
		type: Date,
		default: null
	},
	date: {
		type: String,
		default: null
	},
	time: {
			type: String,
			default: null},
		event: {
			type: String,
			default: null},
		state: {
			type: String,
			default: null},
		bac: {
			type: String,
			default: null},
});

mongoose.model('Appeal', AppealSchema);