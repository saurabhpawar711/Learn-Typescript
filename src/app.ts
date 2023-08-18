
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import todosRoute from "./routes/todos";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(todosRoute);
app.listen(3000);