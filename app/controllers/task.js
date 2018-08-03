import task from "../models/task.js";
import { connect } from "../db";

const alltasks = (req, res) => {
	connect()
	task.find({}, (err, results)  => {
		return res.send(results)
	})
}

const findById = (req, res) => {
	connect()
	task.findOne({ '_id': req.params.id }, (err, result) => {
		if(err) console.log(err)
		return res.send(result);
	});
};

const edit = (req, res) => {
	connect()
	 task.findById( req.params.id, (err, current) => {
		current.status = req.query.status,
		 current.save((err, success)=>{
			return res.send(success);
		})
	});
};

const create = (req, res) => {
	connect()
	console.log(res, 'response')
	const Task = new task({
		description: req.query.description,
		status: req.query.status,
	});

	return Task.save((err, create) => {
		res.json({ status: create})
	})
}

const _delete = (req, res) => {
	connect()
	task.findById(req.params.id, (err, current) => {
		current.status = req.query.status,
			current.remove((err, success) => {
				return res.send(success);
			})
	});
}

export default {
	alltasks,
	findById,
	edit,
	create,
	_delete,
}



