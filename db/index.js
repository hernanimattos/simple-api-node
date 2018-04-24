
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/api-study")

var db = mongoose.connection;

exports.connect = () => {
		db.on("error", () => {
			console.error.bind(console, "connection error:")

		});
		db.once("open", (res) => {

			console.log('Mongo connection is open', res)

		});

		db.on("connected", (res) => {
			console.log("Mongo connected", res)
			return true;

		});

		db.on("disconnected", (ref) => {
			console.log(" Mongo disconnected", ref)

		});

};

exports.close = () => {
	db.close(() => {
		process.exit(0);
	})
}

