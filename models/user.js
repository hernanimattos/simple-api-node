const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
	id: Number,
	name: String,
	role: String,
	date: {
		type: Date,
		default: Date.now
	},
	hidden: Boolean,
});
