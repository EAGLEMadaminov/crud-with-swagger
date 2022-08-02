const express=require('express');
const router=express.Router();
const {addCategory}=require('../controller/category')


router.post('/add',addCategory)
module.exports=router;