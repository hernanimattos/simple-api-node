const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const db = require('./db');
db.connect();
const products = require('./controllers/products.js');
const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', products);

app.listen(port, function (res) {

	console.log('run in ' + port)

});
module.exports = app;

