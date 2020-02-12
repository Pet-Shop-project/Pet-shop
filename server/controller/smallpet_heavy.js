var express = require("express");
var mongoose = require("mongoose");
var router=express.Router();



router.get('/heavy',(req,res)=>{
    mongoose.model('heavySmallpet').find()
})

module.exports=router