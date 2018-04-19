var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index')
var port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, function (res) {

	console.log('run in ' + port)

});

