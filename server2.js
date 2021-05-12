const express = require('express');

const app = express();
app.use(express.static(__dirname + "/MINI_PROJECT"));
//NEW
app.get("/", function(req, res) {
    res.send("Welcome to PRANEETH Basic Site 2");
})
app.get("/homepage", function(req, res) {
    let fnam = __dirname + "/MINI_PROJECT/html/homepage.html";
    res.sendFile(fnam);
})
app.get("/host", function(req, res) {
    let fnam = __dirname + "/MINI_PROJECT/html/host.html";
    res.sendFile(fnam);
})
app.get("/login", function(req, res) {
    let fnam = __dirname + "/MINI_PROJECT/html/login.html";
    res.sendFile(fnam);
})
app.get("/register", function(req, res) {
    let fnam = __dirname + "/MINI_PROJECT/html/register.html";
    res.sendFile(fnam);
})
const PORT = process.env.PORT || 2001;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})
