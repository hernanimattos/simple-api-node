  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const pruductSchema = new Schema({
	id: Number,
	title: String,
	category: String,
  	description: String,
  	value: String,
  	comments: [{
  		userId: Number,
  		userName: String,
  		date: Date,
  		comment: String,
  	}],
  	date: {
  		type: Date,
  		default: Date.now
  	},
  	hidden: Boolean,
  	meta: {
  		votes: Number,
  		favs: Number
  	}
  });

var products = mongoose.model('products', pruductSchema);

exports.pruductSchema;
