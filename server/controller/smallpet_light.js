var express = require("express");
var mongoose = require("mongoose");
var router=express.Router();



router.get('/light',(req,res)=>{
    mongoose.model('lightSmallpets').find((error,result)=>{
        if(error){
                    console.log(error)
                }
                // console.log(result)
               
                res.json(result)
            })  })




            router.get("/details/:id",(req,res)=>{
                mongoose.model("lightSmallpets").findOne({_id: req.params.id},(error,data)=>{
                    if(error){
                        console.log(error)
                    }
                    // console.log(data)
                    res.json(data)
                }) 
            })
            
            router.put('/update/:id', function(req, res){
                console.log('Update a light Smallpets');
                mongoose.model("lightSmallpets").findByIdAndUpdate(req.params.id,
                {
                    $set: {name: req.body.name,
                      size: req.body.size, 
                      life_span: req.body.life_span,
                      weight: req.body.weight, 
                      color: req.body.color, 
                      price: req.body.price, 
                      temperament: req.body.temperament, 
                      images: req.body.images
                    }
                },
                {
                    new: true
                },
                function(err, updated){
                    if(err){
                        res.send("Error updating data");
                    }else{
                        res.json(updated);
                    }
                }
            
                );
            });
module.exports=router