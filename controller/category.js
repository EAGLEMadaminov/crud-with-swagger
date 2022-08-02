const category=require('../models/category');

exports.addCategory=(req,res)=>{
    const category=new Category({
        name:req.body.name,
        email:req.body.email
    })
    category.save()
    .then(()=>{
        res.status(201).json({
            success:true,
            data:user
        })
    })
    .catch((error)=>{
        res.status(400).json({
            success:false,
            data:error
        })
    })
}