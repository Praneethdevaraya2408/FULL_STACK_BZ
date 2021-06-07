const mongoose=require('mongoose');
const taskschema= new mongoose.Schema({
    description:{
        type : String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Task',taskschema);