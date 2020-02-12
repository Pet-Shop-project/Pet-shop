var express = require("express");
var mongoose = require("mongoose");
var router=express.Router();



router.get('/normal',(req,res)=>{
    mongoose.model('normalSmallpet').find()
})
module.exports=router