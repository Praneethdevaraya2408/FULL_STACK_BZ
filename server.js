const express = require('express');

const app = express();
var mongoose= require('mongoose');
//const bodyParser = require("body-parser");
var path = require('path');
var apis= require('./backend/api/allapiroutes.js');
const URI='mongodb+srv://praneeth_2001:praneeth@cluster0.frhiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const options={useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(URI,options);
mongoose.connection.on('connected',(err,res)=>{
 if(err)
{
         console.log(err)
     }
     else{
         console.log('DATABASE Connected Successfully..!')
     }
 })

app.use(express.static(__dirname + "/frontend"));
app.use('/api',apis);
//NEW
app.get("/", function(req, res) {
    res.send("Welcome to PRANEETH Basic Site");
})

app.get("/resume", function(req, res) {
    let fnam = __dirname + "/frontend/html/resume.html";
    res.sendFile(fnam);
})

app.get("/rgb", function(req, res) {
    let fnam = __dirname + "/frontend/html/rgb.html";
    res.sendFile(fnam);
})

// Heroku will automatically set an environment variable called PORT
app.get("/chart", function(req, res) {
    let fnam = __dirname + "/frontend/html/chart.html";
    res.sendFile(fnam);
})
app.get("/jq", function(req, res) {
    let fnam = __dirname + "/frontend/html/JQUERY.html";
    res.sendFile(fnam);
})
app.get("/todo", function(req, res) {
    let fnam = __dirname + "/frontend/html/course.html";
    res.sendFile(fnam);
})
app.get('/:page', function(req, res){
    var ext = path.extname(req.params.page);
    // console.log(ext);
    if(ext=="")
    res.sendFile(__dirname+ '/frontend/html/'+ req.params.page+".html");
    //else  res.sendFile(__dirname+ '/frontend/'+ req.params.page);
})
app.get("/todolocal", function(req, res) {
    let fnam = __dirname + "/frontend/html/todo_local.html";
    res.sendFile(fnam);
})

const PORT = process.env.PORT || 3020;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})
