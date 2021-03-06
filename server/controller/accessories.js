var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var cors = require('cors');
// var accessories=require("../model/accessories")
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
route.get('/list',function(req,resp){
    mongoose.model('accessories').find(function (err, data) {
         resp.json(data);
  })
  })
  route.put('/update/:id', function(req, res){
    console.log('Update a accessory');
    mongoose.model("accessories").findByIdAndUpdate(req.params.id,
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

  route.post('/add',parseUrlencoded,(req,res)=>{
    const accessory=mongoose.model('accessories');
    const newaccessory=new accessory({
          name: req.body.name,
          size: req.body.size,
          life_span: req.body.life_span,
          weight: req.body.weight,
          color: req.body.color,
          price: req.body.price,
          temperament: req.body.temperament,
          images: req.body.images
    })
    
    newaccessory.save((err,res)=>{
      if (err){
        console.log(err)
      }
      console.log(res)
    })
  })  
  module.exports = route;