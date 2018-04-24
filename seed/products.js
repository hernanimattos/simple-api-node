const mongoose = require('mongoose');
var Product = require('../models/products.js');

require('../db').connect();
const Products =  [
	new Product({
		title: 'Calca jeans',
		type: 'Products',
		description: 'Calça jeans azul',
		value: 12,
		comments: [{
			userId: 1,
			userName: 'Teste',
			comment: 'Teste mock',
		}],

		hidden: false,
		meta: {
			votes: 12,
			favs: 23
		}

	}),
	new Product({
		title: 'Calca jeans',
		type: 'Products',
		description: 'Calça jeans azul',
		value: 12,
		comments: [{
			userId: 1,
			userName: 'Teste',
			comment: 'Teste mock',
		}],

		hidden: false,
		meta: {
			votes: 12,
			favs: 23
		}

	})

]


Products.map((p,i) => {
	p.save(function(res, err){
		console.log(res, 'respose')
		console.log(err, 'err')
	});
	return p.save();
})
mongoose.set('debug', true)
