const mongoose=require('mongoose')

const NewSchema=mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true, unique:true},
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"Category",
        required:true
    }
})
module.exports=mongoose.model('news',NewSchema);