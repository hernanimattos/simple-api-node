const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const task = require('./app/routes/task.js');


const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', task);

app.listen(port, (res) => {

	console.log('run in ' + port)

});


module.exports = app;

