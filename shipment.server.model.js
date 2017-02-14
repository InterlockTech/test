'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var trackingDetailSchema = new Schema({

	updated: {
		type: Date,
		default: null
	},
	message: {
		type: String,
		default: null
	},
	status: {
		type: String,
		default: null
	},
		city: {
		type: String,
		default: null
	},
			state: {
		type: String,
		default: null
	},
			zip: {
		type: String,
		default: null
	}


});

mongoose.model('trackingDetail', trackingDetailSchema);


/**
 * Shipment Schema
 */
var ShipmentSchema = new Schema({
	clientName: {
		type: String,
		default: null,
		trim: true
	},
	fromName: {
		type: String,
		default: null,
		trim: true
	},
		toName: {
		type: String,
		default: null,
		trim: true
	},
	shop: {
		type: Schema.ObjectId,
		ref: 'Shop',
		default: null
	},
		telephone: {
		type: String,
		default: null,
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
		estDelivery: {
		type: Date,
		default: null
	},
		delivery: {
		type: Date,
		default: null
	},
	lastUpdate: {
		type: Date,
		default: null
	},
	device: {
		type: Schema.ObjectId,
		ref: 'Device'
	},
	offender: {
		type: Schema.ObjectId,
		ref: 'Offender'
	},
	workorder: {
		type: Schema.ObjectId,
		ref: 'Workorder'
	},
	deviceSN:  {
		type: String,
		default: null,
		trim: true
	},

	tracking:  {
		type: String,
		default: null,
		trim: true
	},
	fromAddress:  {
		type: String,
		default: null,
		trim: true
	},
		fromAddress2:  {
		type: String,
		default: null,
		trim: true
	},
		fromCity:  {
		type: String,
		default: null,
		trim: true
	},
		fromState:  {
		type: String,
		default: null,
		trim: true
	},
		fromZip:  {
		type: String,
		default: null,
		trim: true
	},
		toAddress:  {
		type: String,
		default: null,
		trim: true
	},
		toAddress2:  {
		type: String,
		default: null,
		trim: true
	},
		toCity:  {
		type: String,
		default: null,
		trim: true
	},
		toState:  {
		type: String,
		default: null,
		trim: true
	},
		toZip:  {
		type: String,
		default: null,
		trim: true
	},
	status:  {
		type: String,
		default: 'Waiting',
		trim: true
	},
	trackingDetails: [trackingDetailSchema.schema],
	label:  {
		type: String,
		default: null,
		trim: true
	},
	returnLabel:  {
		type: String,
		default: null,
		trim: true
	},
	returnShipment: {
		type: Schema.ObjectId,
		ref: 'Shipment'
	},
		boxSize:  {
		type: String,
		default: null,
		trim: true
	},
			weight:  {
		type: String,
		default: null,
		trim: true
	},
	shipmentType: {
		type: String,
		default: null
	},
		shipmentEmail: {
		type: String,
		default: null
	},
		shippingRate: {
		type: String,
		default: null
	},
	pending: {
		type: Boolean,
		default: false
	},

});

mongoose.model('Shipment', ShipmentSchema);