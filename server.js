var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var router = express.Router();

app.use('/', function (req, res) {
	res.json({message:'Deu certo'})

})
app.use('/api', router);


app.listen(8200);

