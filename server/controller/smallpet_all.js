var express = require("express");
var mongoose = require("mongoose");
var router=express.Router();



router.get('/whole',(req,res)=>{
    mongoose.model('allSmallpets').find((error,result)=>{
        if(error){
                    console.log(error)
                }
                console.log(result)
               
                res.json(result)
            })  })

 router.get("/details/:id",(req,res)=>{
     mongoose.model("allSmallpets").findOne({_id: req.params.id},(error,data)=>{
        if(error){
                  console.log(error)
                  }
                    // console.log(data)
                    res.json(data)
                }) 
            })            

 module.exports=router