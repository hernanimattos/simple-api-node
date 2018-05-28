var task = require('../models/task.js');

exports.alltasks = (req, res) => {
	const connection = require('../db');
	task.find({}, (err, results)  => {
		return res.send(results)
	})
}

exports.findById = (req, res) => {
	const connection = require('../db');
	task.findOne({ '_id': req.params.id }, (err, result) => {
		if(err) console.log(err)
		return res.send(result);
	});
};

exports.edit = (req, res) => {
	const connection = require('../db');
	 task.findById( req.params.id, (err, current) => {
		current.status = req.query.status,
		 current.save((err, success)=>{
			return res.send(success);
		})
	});
};

exports.create = (req, res) => {
	const connection = require('../db');
	const Task = new task({
		description: req.query.description,
		status: req.query.status,
	});

	return Task.save((err, create) => {
		res.json({ status: create})
	})
}

exports.delete = (req, res) => {
	const connection = require('../db');
	task.findById(req.params.id, (err, current) => {
		current.status = req.query.status,
			current.remove((err, success) => {
				return res.send(success);
			})
	});
}



