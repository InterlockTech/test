'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var deviceDetailSchema = new Schema({

	type: {
		type: String,
		default: '',
		trim: true
	},
	updated: {
		type: Date,
		default: Date.now
	},
	notes: {
		type: String,
		default: null
	},
	destination: {
		type: String,
		default: null
	},
	requestor: {
		type: String,
		default: null
	},
	



});

mongoose.model('deviceDetail', deviceDetailSchema, 'devices');



/**
 * Device Schema
 */
var DeviceSchema = new Schema({
	type: {
		type: String,
		default: '',
		trim: true
	},
	deviceType: {
		type: String,
		default: null
	},
	internalSN: {
		type: String,
		default: null
	},
	created: {
		type: Date,
		default: Date.now
	},
	lastUpdated: {
		type: Date,
		default: null
	},
	lastConfirmed: {
		type: Date,
		default: null
	},
	lastConfirmedBy: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	lastConfirmedStatus: {
		type: String,
		default: null
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	serialNumber: {
		type: String,
		trim: true,
		default: null
	},
	internalSerialNumber: {
		type: String,
		trim: true,
		default: null
	},
	notes: {
		type: String,
		trim: true,
		default: null
	},
	status: {
		type: String,
		trim: true,
		default: null
	},
	details: [deviceDetailSchema.schema],
	shopId: {
		type: Schema.ObjectId,
		ref: 'Shop'
		
	},
	offender: {
		type: Schema.ObjectId,
		ref: 'Offender'
	},
	scan: {
		type: String,
		trim: true,
		default: null
	},
	qrCode: {
		type: String,
		trim: true,
		default: null
	},
	shipment: {
		type: Schema.ObjectId,
		ref: 'Shipment'
		
	},
	cameraEnabled: {
		type: Boolean,
		trim: true,
		default: false
	},
	recal: {
		type: Boolean,
		trim: true,
		default: false
	},
	lastCalibration: {
		type: Date,
		default: null
	},
	lastReset: {
		type: Date,
		default: null
	},
	nextCalibration: {
		type: Date,
		default: null
	},
	nextLockout: {
		type: Date,
		default: null
	},
	locationUnknown: {
		type: Boolean,
		trim: true,
		default: false
	},
	
});

mongoose.model('Device', DeviceSchema, 'devices');