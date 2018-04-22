const express = require('express');
const router = express.Router();

router.get('/products', function(req, res){
	res.json({ message: 'products' })

})

module.exports = router;
