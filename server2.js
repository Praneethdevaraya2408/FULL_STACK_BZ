const express = require('express');

const app = express();
app.use(express.static(__dirname + "/frontend"));
//NEW
app.get("/", function(req, res) {
    res.send("Welcome to PRANEETH Basic Site");
})

app.get("/noderesume", function(req, res) {
    let fnam = __dirname + "/frontend/html/noderesume.html";
    res.sendFile(fnam);
})
app.get("/resume", function(req, res) {
    let fnam = __dirname + "/frontend/html/resume.html";
    res.sendFile(fnam);
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 2001;

// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})
