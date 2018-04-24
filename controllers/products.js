
var product = require('../models/products.js');

exports.allProducts = (req, res) => {

	return product.find({}, (err, results)  => {

		return res.send(results)
	})

}

exports.findById = (req, res) => {

	product.findOne({ '_id': req.params.id }, (err, result) => {

		return res.send(result);

	});
};

exports.postProduct = (req, res) => {

	const Product = new product();
	Product.title = 'Teste';

	console.log(req.body, 'body')
	return Product.save((err) => {


		res.json({status: 'created'})

	})
	next()



	// product.create(req.body, (err, product) => {

	// 	if(err) console.log(err, 'Erro to create product')
	// 	return res.send(product)

	// })


}



