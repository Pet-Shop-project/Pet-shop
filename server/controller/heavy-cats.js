var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
}); 


router.get('/listcat',function(req,resp){
    mongoose.model('cats').find(function (err, data) {
      
  

        resp.json(data);
        
  })
  })

  router.get('/details/:_id',function(req,resp){

     
    var _id=req.params._id;
   
   mongoose.model('cats').findOne({_id:_id},function(err,data){
  
    resp.json(data);
  
   })
  
  })
  router.put('/update/:id', function(req, res){
    console.log('Update a Cats');
    mongoose.model("cats").findByIdAndUpdate(req.params.id,
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

  router.post('/addheavycat',parseUrlencoded,(req,res)=>{
    const heavycats=mongoose.model('cats');
    const newheavycats=new heavycats({
          name: req.body.name,
          size: req.body.size,
          life_span: req.body.life_span,
          weight: req.body.weight,
          color: req.body.color,
          price: req.body.price,
          temperament: req.body.temperament,
          images: req.body.images
    })
    
    newheavycats.save((err,res)=>{
      if (err){
        console.log(err)
      }
      console.log(res)
    })
  })  
   // rndom

   router.get('/random',function(req,resp){

    var cats=[];
      mongoose.model('cats').find(function(err,data){
        for (i=0; i<1; i++)
        {
          cats[i]=data[i];
        }
        resp.send(cats);
    })
    
    })
module.exports = router;

 