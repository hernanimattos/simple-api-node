
const mongoose = require('mongoose');
const con = require('../db')
const Task = require('../models/task.js');

const TaskSeed = [
	new Task({
		description: 'Fazer comida',
		status: 'fisish',
	}),
];

TaskSeed.map((p, i) => {
	p.save(function(res, err){
		console.log(res, 'save')
		console.log(err, 'error')
	});
	return p.save();
})
mongoose.set('debug', true)
