var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var cors = require('cors');
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});
route.get('/list',function(req,resp){
    mongoose.model('lightbirds').find(function (err, data) {
         resp.json(data);
        //  resp.send("data");
  })
  })
  route.get('/lightbirdsdetails/:_id', function (req, resp) {
    mongoose.model("lightbirds").findOne({
      _id: req.params._id
    }, function (err, data) {
      resp.json(data);
    })
  })
  route.put('/update/:id', function(req, res){
    console.log('Update a lightbirds');
    mongoose.model("lightbirds").findByIdAndUpdate(req.params.id,
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
  route.get('/random',function(req,resp){

    var cats=[];
      mongoose.model('lightbirds').find(function(err,data){
        for (i=0; i<1; i++)
        {
          cats[i]=data[i];
        }
        resp.send(cats);
    })
    
    })
 module.exports = route;