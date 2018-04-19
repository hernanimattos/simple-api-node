var express = require('express');
var router = express.Router();

router.get('/products', function(req, res){
	res.json({ message: 'products' })

})

module.exports = router;
