var express = require('express');
const app = express.Router();
var todo= require('./todo.js');
var course= require('./courses.js');

app.use("/todo",todo);
app.use("/course",course);

module.exports=app;