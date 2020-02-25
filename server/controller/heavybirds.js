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
    mongoose.model('heavy_birds').find(function (err, data) {
         resp.json(data);

  })
  })
  route.get('/details/:_id', function (req, resp) {
    mongoose.model("heavy_birds").findOne({
      _id: req.params._id
    }, function (err, data) {
      resp.json(data);
    })
  })
  route.get('/random',function(req,resp){

    var cats=[];
      mongoose.model('heavy_birds').find(function(err,data){
        for (i=0; i<1; i++)
        {
          cats[i]=data[i];
        }
        resp.send(cats);
    })
    
    })

 module.exports = route;