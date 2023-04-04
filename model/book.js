const mongoose=require('mongoose')
const bookSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    subscribed:{
        type:Boolean,
        required:true,
        default:false,
    }
});
module.exports = mongoose.model('Book',bookSchema)