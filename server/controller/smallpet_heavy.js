var express = require("express");
var mongoose = require("mongoose");
var router=express.Router();



router.get('/heavy',(req,res)=>{
    mongoose.model('heavySmallpets').find((error,result)=>{
        if(error){
                    console.log(error)
                }
                // console.log(result)
               
                res.json(result)
            })  })


router.get("/details/:id",(req,res)=>{
    mongoose.model("heavySmallpets").findOne({_id: req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }
        // console.log(data)
        res.json(data)
    }) 
})            

module.exports=router