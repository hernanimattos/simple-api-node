import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/api-study")
const db = mongoose.connection;
const connect = () => {
	db.on("error", (error) => {

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

const stop = () => {
	db.close(() => {
		process.exit(0);
	})
}
export {
	stop,
	connect
}




