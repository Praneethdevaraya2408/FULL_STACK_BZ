require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbconnect=require('./Backend/Lib/DB_connection_Lib');
dbconnect.connect();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('./Backend/Lib/DBusersBootstrap').createUsers();
var app = express();
var userRouter=require('./routes/users')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',userRouter);
module.exports = app;
