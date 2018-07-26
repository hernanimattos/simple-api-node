import mongoose from "mongoose";
const Schema = mongoose.Schema;

const task = new Schema({
	description: String,
	status: Boolean,
});

module.exports = mongoose.model('tasks', task);
