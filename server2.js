const express = require('express');
const app = express();
const mongoose= require('mongoose');
const PORT = process.env.PORT || 3000;
var products=[{
    id:1,
    name:'laptop'
},
{
    id:2,
    name:'dhanunjai'
}]
var cid=2;
// const URI='mongodb+srv://praneeth_2001:praneeth@cluster0.frhiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const options={useUnifiedTopology: true, useNewUrlParser: true };
// mongoose.connect(URI,options);
// mongoose.connection.on('connected',(err,res)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log('DATABASE Connected Successfully..!')
//     }
// })
app.use(express.static(__dirname + "/frontend"));
app.get("/", function(req, res) {
    res.send("Welcome to PRANEETH Basic Site");
})


app.get("/todolocal", function(req, res) {
    let fnam = __dirname + "/frontend/html/todo_local.html";
    res.sendFile(fnam);
})



app.get("/ajax", function(req, res) {
    let fnam = __dirname + "/frontend/html/ajaxapi.html";
    res.sendFile(fnam);
})
app.get("/ajaxget", function(req, res) {
    res.send({products:products});
})

app.post('/ajaxget', function(req, res) {
    var productName = req.body.name;
    cid++;

    products.push({
        id: cid,
        name: productName
    });

    res.send('Successfully created product!');
});




















// Start the server
app.listen(PORT, function() {
    console.log("Server Starting running on http://localhost:" + PORT);
})
