import login from "../models/task.js";
import {
	connect
} from '../db';

const findUser = (req, res) => {
	connect();
	console.log(res)

	// task.find({}, (err, results) => {
	// 	return res.send(results)
	// })
}


export default {
	findUser
}
