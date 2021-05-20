const mongoose= require('mongoose');
const URI='mongodb+srv://praneeth_2001:praneeth@cluster0.frhiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectDB=async()=>{
  await  mongoose.connect(URI,{
      useUnifiedTopology:true,
      useNewUrlParser:true
  });
  console.log('db connected');
};
module.exports=connectDB;