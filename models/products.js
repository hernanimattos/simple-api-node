const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productsSchema = new Schema({
	title: String,
	type: String,
	description: String,
	value: Number,
	comments: [{
		userId: Number,
		userName: String,
		comment: String,
	}],

	hidden: Boolean,
	meta: {
		votes: Number,
		favs: Number
	}
});

module.exports = mongoose.model('product', productsSchema);
