const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/api-test");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(res) {
  // we're connected!

  console.log('ff', res)
});

const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, function (res) {

	console.log('run in ' + port)

});

