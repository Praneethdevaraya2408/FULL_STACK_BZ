const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://praneeth_2001:praneeth@cluster0.frhiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()
var options={useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(url,options)
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.get("/rgb", function(req, res) {
    let fnam = __dirname + "/fe/html/hai.html";
    res.sendFile(fnam);
})
const alienRouter = require('./be/routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})