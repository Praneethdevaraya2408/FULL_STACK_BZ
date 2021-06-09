const express = require('express');
const bcrypt=require('bcryptjs');
const User=require('../FULL_STACK_BZ/backend/models/usermodel');
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

app.get("/todolocal", function(req, res) {
    let fnam = __dirname + "/frontend/html/todo_local.html";
    res.sendFile(fnam);
})

app.get("/register", function(req, res) {
    let fnam = __dirname + "/frontend/html/registration.html";
    res.sendFile(fnam);
})
app.get("/login", function(req, res) {
    let fnam = __dirname + "/frontend/html/login.html";
    res.sendFile(fnam);
})
app.get("/host", function(req, res) {
    let fnam = __dirname + "/frontend/html/host.html";
    res.sendFile(fnam);
})
app.get("/dashboard", function(req, res) {
    let fnam = __dirname + "/frontend/html/dashboard.html";
    res.sendFile(fnam);
})

app.post("/register",(req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var uname = req.body.uname;
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;
    var cpassword = req.body.cpassword;
    if (password===cpassword) {
        var data = {
            "fname": fname,
            "lname": lname,
            "uname": uname,
            "email" : email,
            "phno": phno,
            "password" : password,
            "cpassword" :cpassword
        
        }
        User.insertMany(data,(err,collection)=>{
            if(err){
                throw err;
            }
           console.log(data)
        }); return res.redirect('/host')
    
        
    } else {
        res.redirect("/newone")
    }

})

app.post('/login',(req,res)=>{
    const uname=req.body.uname;
    const password=req.body.password;
    const username=User.findOne({uname:uname},function(err,resu){
        if (err) {
            console.log('unsuccessful')
        } else {
            if(resu.password===password)
            {
                res.redirect('/dashboard')
            }
            else{
                res.redirect("/newone2")
            }
        }

    });
})
const PORT = process.env.PORT || 3020;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})
