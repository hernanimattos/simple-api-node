  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const pruduct = new Schema({
	id: Number,
  	title: String,
  	descriotion: String,
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
