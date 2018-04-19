var express = require('express');

var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/api-dev');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('h');
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var router = express.Router();

var port = process.env.PORT || 3100;

router.get('/', function (req, res) {
  res.json({ message: [
	  {
	  name:'Hernani',
	  }
  ]
  });

});

app.use('/api', router);

app.listen(port);
console.log('localhost:' + port);


