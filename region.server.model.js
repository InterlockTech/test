'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Region Schema
 */
var RegionSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Region name',
		trim: true
	},
	abbr: {
		type: String,
		default: '',
		required: 'Please fill Region Abbreviation',
		trim: true
	},
	Install: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	RegularService: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	Calibration: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	ViolationReset: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	VehicleSwap: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	Diagnostic: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	Removal: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	MonthlyFee: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	LateFee: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	MissedApptFee: {
		customerFee: {
		type: Number,
		default: null
		},
		shopFee: {
			type: Number,
			default: null
		},
		taxable: {
			type: Boolean,
			default: true
		},
		taxArea: {
			type: String,
			default: null
		}},
	calibrationInterval: {
		type: Number,
		default: null
	},
	serviceInterval: {
		type: Number,
		default: null
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Region', RegionSchema);