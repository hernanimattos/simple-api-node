	

import express from "express";
const app = express();
import bodyParser from "body-parser";
import task from "./app/routes/task";


const port = process.env.PORT || 3100;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', task);

app.listen(port, (res) => {

	console.log('run in ' + port)

});


export { app };

