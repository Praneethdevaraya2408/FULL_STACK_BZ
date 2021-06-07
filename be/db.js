const MongoClient=require("mongodb").MongoClient;
const ObjectId=require('mongodb').ObjectID;
const dbname="crud_mongodb";
const URI='mongodb+srv://praneeth_2001:praneeth@cluster0.frhiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options={useUnifiedTopology: true, useNewUrlParser: true };
MongoClient.connect(URI,options,(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})