'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var vehicleSchema = new Schema({

	year: {
		type: String,
		default: '',
		trim: true
	},
	make: {
		type: String,
		default: null
	},
	model: {
		type: String,
		default: null
	},
	requestor: {
		type: String,
		default: null
	},
	updated: {
		type: Date,
		default: Date.now
	},
	notes: {
		type: String,
		default: null
	},



});

mongoose.model('vehicle', vehicleSchema, 'offenders');



/**
 * Offender Schema
 */
var OffenderSchema = new Schema({
	firstName: {
		type: String,
		required: 'Please include first name',
		trim: true
		
	},
		lastName: {
		type: String,
		required: 'Please include last name',
		trim: true
		
	},
		mInitial: {
		type: String,
		trim: true
		
	},
		displayName: {
		type: String,
		trim: true
		
	},
	dobMO: {
		type: Number
	},
	dobDAY: {
		type: Number
	},
	dobYR: {
		type: Number
	},
	created: {
		type: Date,
		default: Date.now
	},
		dob: {
		type: Date,
		default: null
	},
		deployedDate: {
		type: Date,
		default: null
	},
		lockOutDate: {
		type: Date,
		default: null
	},
		contractEndDate: {
		type: Date,
		default: null
	},

	
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	merchantCustomerId: {
		type: Number,
		default: null

	},
	paymentProfileId: {
		type: Number,
		default: null

	},

		driverNumber: {
		type: String,
		
		trim: true
	},
		vehicleMake: {
		type: String,
		
		trim: true
	},
	
		vehicleModel: {
		type: String,
		
		trim: true
	},
		vehicleYear: {
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
		offenderEmail: {
		type: String,
		
		trim: true
	},
		billingAddress: {
		type: String,
		trim: true
	},
			billingCity: {
		type: String,
		trim: true
	},
			billingState: {
		type: String,
		trim: true
	},
	last4: {
		type: String,
		trim: true
	},
		term: {
		type: Number,
		default: null
	},
			billingZipcode: {
		type: String,
		
		trim: true
	},
			stateReportTo: {
		type: String,
		default: 'AZ',
		trim: true
	}, 
	assignedShop: {
		type: Schema.ObjectId,
		ref: 'Shop',
		default: null
	
	}, 
	pendingWorkOrder: {
		type: Schema.ObjectId,
		ref: 'Workorder',
		default: null

	}, 
	pendingWorkType: {
		type: String,
		default: 'Unkown',
		trim: true
	},
	agreementSigned: {
		type: Boolean,
		default: false
	},
	mainPhoneSmS: {
		type: Boolean,
		default: false
	},
	cardNumber: {
		type: String,
		default: '',
		trim: true
	},
	cardCVV: {
		type: String,
		default: '',
		trim: true
	},
	cardExp: {
		type: String,
		default: '',
		trim: true
	},
	billDate: {
		type: Number,
		default: null
	},
	leaseFee: {
		type: Number,
		default: 75
	},
	resetFee: {
		type: Number,
		default: 50
	},
	creditsOwed: {
		type: Number,
		default: 0
	},
	finalBillDate: {
		type: Date
	},
	deviceSN: {
		type: String,
		trim: true
	},
	device: {
		type: Schema.ObjectId,
		ref: 'Device',
		default: null

	}, 
	deviceType: {
		type: String,
		trim: true,
		default: null
	}, 
	devices: [{
		type: Schema.ObjectId,
		ref: 'Device',
	}],
	authNetErr: {
		type: String,
		trim: true,
		default: null
	}, 
	notes: {
		type: String,
		trim: true, 
		default: ' '
	}, 
	installType: {
		type: String,
		trim: true, 
		default: 'Standard'
	}, 
	attorneyInfo: {
		type: String,
		trim: true, 
		default: null
	}, 
	trafficSchool: {
		type: String,
		trim: true, 
		default: null
	}, 
	insuranceAgent: {
		type: String,
		trim: true, 
		default: null
	},
		plateNum: {
		type: String,
		trim: true, 
		default: null
	},
		VIN: {
		type: String,
		trim: true, 
		default: null
	},
	prospect: {
		type: Boolean,
		default: false
	},
		status: {
		type: String,
		default: null,
		trim: true
	},  
	soldDate: {
		type: Date,
		default: null
	}, 
	salesRep: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	autoImport: {
		type: Boolean,
		default: false
	},
	referralPartner: {
		type: Schema.ObjectId,
		ref: 'Partner'
	},
	howTheyFoundUs: {
		type: String,
		default: null,
		trim: true
	},
	nextCalibration: {
		type: Date,
		default: null
	},
	lastCalibration: {
		type: Date,
		default: null
	},
	vehicles: [vehicleSchema.schema],
	pastClient: {
		type: Boolean,
		default: false

	},
	licenseImage: {
		type: String,
		default: null,
		trim: true
	},
	profileImage: {
		type: String,
		default: null,
		trim: true
	},
	



});

mongoose.model('Offender', OffenderSchema);