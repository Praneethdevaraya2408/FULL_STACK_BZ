const express = require('express');

const app = express();
app.use(express.static(__dirname + "/frontend"));
//NEW
app.get("/", function(req, res) {
    res.send("Welcome to PRANEETH Basic Site");
})

app.get("/resume", function(req, res) {
    let fnam = __dirname + "/frontend/html/resume.html";
    res.sendFile(fnam);
})

app.get("/google", function(req, res) {
    let fnam = __dirname + "/frontend/html/index.html";
    res.sendFile(fnam);
})
app.get("/intro", function(req, res) {
    let fnam = __dirname + "/frontend/html/intro.html";
    res.sendFile(fnam);
})
app.get("/rgb", function(req, res) {
    let fnam = __dirname + "/frontend/html/rgb.html";
    res.sendFile(fnam);
})
app.get("/login", function(req, res) {
    let fnam = __dirname + "/frontend/html/login.html";
    res.sendFile(fnam);
})
app.get("/register", function(req, res) {
    let fnam = __dirname + "/frontend/html/register.html";
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
app.get("/homepage", function(req, res) {
    let fnam = __dirname + "/frontend/html/homepage.html";
    res.sendFile(fnam);
})
app.get("/todo", function(req, res) {
    let fnam = __dirname + "/frontend/html/index2.html";
    res.sendFile(fnam);
})
const PORT = process.env.PORT || 2001;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})
