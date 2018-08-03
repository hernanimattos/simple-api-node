import mongoose from "mongoose";
const Schema = mongoose.Schema;
console.log('MOdel user')

const user = new Schema({
	name: String,
	email: String,
	password: String,
	update: { type: Date, default: Date.now },
	age: { type: Number, min: 18, max: 70},

});

module.exports = mongoose.model('users', user);
