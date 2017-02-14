'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	var Change = mongoose.model('Change');

var deviceDetailWOSchema = new Schema({

	type: {
		type: String,
		default: null,
		trim: true
	},
	updated: {
		type: Date,
		default: Date.now
	},
	notes: {
		type: String,
		default: null,
		trim: true
	},
	scan: {
		type: String,
		default: null,
		trim: true
	}
	



});

mongoose.model('deviceDetailWO', deviceDetailWOSchema, 'workorders');




var vehicleDetailSchema = new Schema({

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
	year: {
		type: String,
		default: null
	},
	make: {
		type: String,
		default: null
	},
	model: {
		type: String,
		default: null
	},
	



});

mongoose.model('vehicleDetail', vehicleDetailSchema, 'workorders');


var diagnosticDetailSchema = new Schema({

	claimedIssue: {
		type: String,
		default: null,
		trim: true
	},
	techNotes: {
		type: String,
		default: null,
		trim: true
	},
	diagnosis: {
		type: String,
		default: null,
		trim: true
	},
	replicated: {
		type: Boolean,
		default: null
	},
	wiringChecked: {
		type: Boolean,
		default: null
	},
	accuracyCheck: {
		type: Boolean,
		default: null
	},
	relatedFiles: {
		type: Array,
		default: []
	}
	



});

mongoose.model('diagnosticDetail', diagnosticDetailSchema, 'workorders');


/**
 * Workorder Schema
 */
var WorkorderSchema = new Schema({
	type: {
		type: String,
		default: '',
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
	serviceCenter: {
		type: String,
		default: '',
		trim: true
	},
	shopId: {
		type: Schema.ObjectId,
		ref: 'Shop'
		
	},
	offender: {
		type: Schema.ObjectId,
		ref: 'Offender'
		
	},
	vehicleDetails: [vehicleDetailSchema.schema],
	diagnosticDetails: [diagnosticDetailSchema.schema],
	deviceDetailWO: [deviceDetailWOSchema.schema],
	creditsOwed: {
		type: Number,
		default: 0
	},
	checkIn: {
		type: Date,
		default: null
	},
	status: {
		type: String,
		default: 'Pending'
		
	},
	completed: {
		type: Date,
		default: null
	},
	apptDate: {
		type: Date,
		default: null
	},
	deviceDone: {
		type: String,
		default: null,
		trim: true
		
	},
	deviceScan: {
		type: String,
		default: null,
		trim: true
		
	},
	deviceSN: {
		type: String,
		default: null,
		trim: true
		
	},
	deviceType: {
		type: String,
		default: null,
		trim: true
		
	},
	boxScan: {
		type: String,
		default: null,
		trim: true
		
	},
	svcAddress: {
		type: String,
		default: null,
		trim: true
		
	},
	deviceNotes: {
		type: String,
		default: null,
		trim: true
		
	},
	orderNotes: {
		type: String,
		default: null,
		trim: true
		
	},
	inspected: {
		type: Date,
		default: null
	},
	customerVideo: {
		type: Date,
		default: null
	},
	techName: {
		type: String,
		default: null,
		trim: true
		
	},
	authSigned: {
		type: Date,
		default: null
	},
	nextLockoutDateSet: {
		type: Date,
		default: null
	},
	amount: {
		type: Number,
		default: 65,
		trim: true
	},
	shopFee: {
		type: Number,
		default: 60,
		trim: true
	},
	authCode: 
	{
		type: String,
		trim: true
	}, 
	pmtStatus: 
	{
		type: String,
		trim: true,
		default: 'Pending'
	},
	signedAuth: 
	{
		type: String,
		trim: true
	},
	stateForm: 
	{
		type: Number,
		default: 920
	},
	shopPaid: {
		type: String,
		default: null,
		trim: true
	},
	denyReason: {
		type: String,
		default: null,
		trim: true
	},
	shopForCreditIssued: {
		type: Boolean,
		default: false,
		
	},
	deviceAssigned: {
		type: Boolean,
		default: false
	},
	shipmentId: {
		type: Schema.ObjectId,
		ref: 'Shipment'
		
	},
	deviceData: {
		type: Boolean,
		default: false,
		
	},
	verifiedSN: {
		type: Boolean,
		default: false,
	},
	reReport: {
		type: Boolean,
		default: false,
	},
	potentialTampering: {
		type: Boolean,
		default: false,
	},
	tamperNotes: {
		type: String,
		default: null,
		trim: true
	},
	allowReset: {
		type: Boolean,
		default: false,
	},
	internalSerialNumber: {
		type: String,
		default: null,
		trim: true
	},
	violationsCharged: {
		type: Boolean,
		default: false,
		
	},
	selfie: {
		type: String,
		default: null,
		trim: true
	},
	preConfig: {
		type: String,
		default: null,
		trim: true
	},
	postConfig: {
		type: String,
		default: null,
		trim: true
	},
	unitSwap: {
		type: Boolean,
		default: false
	}


});



// WorkorderSchema.pre('save', function(next) {

// 	console.log('Workorder about to be saved');
// 	var _this = this;
// 	console.log(_this);

// 	if(_this._id){
		
// 		var displayName = '';
// 		var userId = '';

// 		if(_this.user && _this.user.displayName){
// 			displayName = _this.user.displayName;
// 			userId = _this.user._id;
// 		} 

		

// 		console.log('This is an existing workorder - we need to add a log entry', _this._id);
// 		_this.constructor.find({_id: _this._id}).exec(function(err, wo){
// 			console.log("err", err);
// 			console.log(wo);
// 			if(wo.length > 0){
// 				console.log('Have an actual Workorder...', wo[0]);
// 				var wo = wo[0];

// 				// var keys = Object.keys( payment.constructor);
// 				// console.log('PC', keys);

// 				// var keys = Object.keys(payment);
// 				// console.log('PMTSssss', keys);

// 				// console.log('Payment.doc', payment._doc);
// 				// console.log(Object.getOwnPropertyNames(payment._doc));

// 				var keys = Object.keys(wo._doc);
// 				console.log('Keys???: ', keys);
// 				var changeLog = [];
// 				//Go through each key
// 				for(var i=0;i < keys.length; i++){
// 					// console.log(keys[i]);
// 					var keyName = keys[i];
// 					// if(keyName === 'taxDetails') continue;
// 					if(keyName === 'user') continue;
// 					if(keyName === 'notes') continue;
// 					// if(keyName === '_id'){
// 					// 	console.log('_id key...what to do here...', keyName);
// 					// }
					
// 					var existingKey = JSON.stringify(wo[keyName]);
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
// 							console.log(wo[keyName]);
// 							if(stuff._id.toString()==wo[keyName].toString()){
// 								console.log('Id match 166');
// 							}else{
// 								console.log('ID DO NOT MATCH 168');
// 							}

// 						}else{
// 							// console.log('Oh fuck');
// 							// stuff = JSON.parse(stuff);
// 							console.log('No Stuff._id - WHAT THE FUCK??? 174', stuff);
// 							if(stuff._id==wo[keyName]){
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
// 				console.log('Lets save these changes');
				
// 				var changes = new Change({
// 					user: userId,
// 				 	displayName: displayName,
// 				 	changeType: 'Workorder',
// 				 	woId: _this._id,
// 				 	changeDetails: changeLog,
// 				 	offender: _this.offender
// 				});
				
// 				changes.save(function(err, change2){
// 					console.log(err);
// 					console.log(change2);
// 					next();
// 				});
// 			}else{
// 				next();
// 			}
			
// 		});
// 	}else{
// 		console.log('This is not an existing Wo');
// 		next();
// 	}
	
// 	});

mongoose.model('Workorder', WorkorderSchema);