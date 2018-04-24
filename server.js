const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('./db').connect();
const products = require('./routes/products.js');


const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', products);

app.listen(port, (res) => {

	console.log('run in ' + port)

});


module.exports = app;

