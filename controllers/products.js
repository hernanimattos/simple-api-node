const express = require('express');
const router = express.Router();
const ProductModel = require('../models/products.js');
const db = require('../db');

router.get('/products', function (req, res) {

	res.json({ message: 'products' })

});



module.exports = router;
