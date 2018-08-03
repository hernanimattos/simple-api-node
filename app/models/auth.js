import mongoose from "mongoose";
const Schema = mongoose.Schema;

const auth = new Schema({
	name: String,
	email: String,
	password: String,
});

module.exports = mongoose.model('auth', auth);
