'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var repliesSchema = new Schema({

	updated: {
		type: Date,
		default: null
	},
	
	content: {
		type: String,
		default: '',
		trim: true
	},
	author: {
		type: String,
		default: '',
		trim: true
	},




});

mongoose.model('replies', repliesSchema, 'notes');



/**
 * Notes Schema
 */
var NoteSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		
	},
	category: {
		type: String,
		default: '',
		trim: true,
		
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	author: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	replies: [repliesSchema.schema],
	client: {
		type: Schema.ObjectId,
		ref: 'Offender'
	},
	device: {
		type: Schema.ObjectId,
		ref: 'Device'
	},
	noteType: {
		type: String,
		default: null,
		trim: true
	}
});

mongoose.model('Note', NoteSchema, 'notes');