import user from "../models/user";
import {connect} from '../db';

const allUsers = (req, res) => {
	connect();

	user.find({}, (err, results) => {
		if (err) res.send(err.errors)
		return res.send(results)
	})
}

const findById = (req, res) => {
	connect();
	user.findOne({
		'_id': req.params.id
	}, (err, result) => {
		if (err) res.send(err.errors)
		return res.send(result);
	});
};

const edit = (req, res) => {
	connect();
	user.findById(req.params.id, (err, current) => {
		current.status = req.query.status,
			current.save((err, success) => {
				if (err) res.send(err.errors)
				return res.send(success);
			})
	});
};

const create = (req, res) => {
	connect();
	console.log(req)

	const User = new user({
		name: req.query.name,
		email: req.query.email,
		password: req.query.password,
		age: req.query.age
	});

	console.log(User)

	// return res

	return User.save((err, create) => {
		if (err) res.send(err.errors)
		res.json({
			status: create
		})
	})
}

const _delete = (req, res) => {
	connect();
	user.findById(req.params.id, (err, current) => {
		current.status = req.query.status,
			current.remove((err, success) => {
				if (err) res.send(err.errors)
				return res.send(success);
			})
	});
}

export default {
	allUsers,
	findById,
	edit,
	create,
	_delete,
}
