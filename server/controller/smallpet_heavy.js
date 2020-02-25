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

router.get('/random',function(req,resp){

    var cats=[];
      mongoose.model('heavySmallpets').find(function(err,data){
        for (i=0; i<1; i++)
        {
          cats[i]=data[i];
        }
        resp.send(cats);
    })
    
    })

module.exports=router