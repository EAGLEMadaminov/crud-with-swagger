const mongoose=require('mongoose')

const userCategory=mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true, unique:true},
    phoneNumber:{type:String, required:true, unique:true}
})
module.exports=mongoose.model('Category',userCategory);