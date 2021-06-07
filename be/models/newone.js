const mongoose=require('mongoose');
const newuser=mongoose.Schema({
    name : String,
    age  : Number,
    colony : String
});
module.exports=mongoose.model('New',newuser);
