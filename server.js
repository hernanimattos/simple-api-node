	

import express from "express";
const app = express();
import bodyParser from "body-parser";
import Task from "./app/routes/task";
import Auth from "./app/routes/auth";
import User from "./app/routes/user";


const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', Task);
app.use('/api', Auth);
app.use('/api', User)

app.listen(port, (res) => {

	console.log('run in ' + port)

});


export { app };

