var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var parseUrlencoded = bodyParser.urlencoded({
  extended: true
}); 

router.get('/listcat',function(req,resp){
    mongoose.model('normal_cats').find(function (err, data) {
      
  

        resp.json(data);
        
  })
  })

  router.get('/details/:_id',function(req,resp){

     
    var _id=req.params._id;
   
   mongoose.model('normal_cats').findOne({_id:_id},function(err,data){
  
    resp.json(data);
  
   })
  
  })
module.exports = router;
