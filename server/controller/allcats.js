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
    mongoose.model('allcats').find(function (err, data) {
         resp.json(data);
       
  })
  })
  route.get('/details/:_id', function (req, resp) {
    mongoose.model("allcats").findOne({
      _id: req.params._id
    }, function (err, data) {
      resp.json(data);
    })
  })
 module.exports = route;