'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var deviceSummarySchema = new Schema({


	updated: {
		type: Date,
		default: Date.now
	},
	notes: {
		type: String,
		default: null
	},
	totalTests: {
		type: Number,
		default: 0
	},
	passedTests: {
		type: Number,
		default: 0
	},
		failedTests: {
		type: Number,
		default: 0
	},
		violations: {
		type: Number,
		default: 0
	},
		duiLevel: {
		type: Number,
		default: 0
	},
	highBAC: {
		bac: {
		type: Number,
		default: 0
		},
		date: {
			type: Date,
			default: null
		},
		time: {
			type: String,
			default: null
		},

	},
	vioData: {

		num: {
			type: String,
			default: null},
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
		testResult: {
			type: String,
			default: null},
		envTemp: {
			type: String,
			default: null},
		fcTemp: {
			type: String,
			default: null},
		line: {
			type: String,
			default: null},
		appeal: {
			type: String,
			default: null},
		approved: {
			type: Boolean,
			default: null
		}

	},

});

mongoose.model('deviceSummary', deviceSummarySchema, 'devices');




/**
 * Upload Schema
 */
var DeviceDataSchema = new Schema({
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
	offender: {
		type: Schema.ObjectId,
		ref: 'Offender'
	},
	workorder: {
		type: Schema.ObjectId,
		ref: 'Workorder'
	},
	summary: [deviceSummarySchema.schema],
	// properties: {
	// 	articleId: 'asdfasdfasdf'
	// 	whateverId: 'asdfasdf'
	// 	// Generic per-application properties
	// }
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	appeal: {
			type: Schema.ObjectId,
			ref: 'Appeal'
		},

});

mongoose.model('DeviceData', DeviceDataSchema);
