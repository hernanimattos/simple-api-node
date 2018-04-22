const mongoose = require("mongoose");
const URL = 'mongodb://localhost:27017/api-test';
mongoose.connect("mongodb://localhost:27017/api-test")
var db = mongoose.connection;
exports.connect = function () {
		db.on("error", function () {
			console.error.bind(console, "connection error:")

		});
		db.once("open", function (res) {

			console.log('Mongo connection is open')

		});

		db.on("connected", function () {
			console.log("Mongo connected")
			return true;

		});

		db.on("disconnected", function (ref) {
			console.log(" Mongo disconnected")

		});

};

exports.close =  function () {
	db.close(function () {
		process.exit(0);
	})
}

