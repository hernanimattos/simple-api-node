const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.js');


router.get('/products', productsController.allProducts)
router.get('/products/:id', productsController.findById)
router.post('/products', productsController.postProduct)

module.exports = router;
