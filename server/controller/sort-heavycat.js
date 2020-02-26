var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");





router.get('/listcat',function(req,resp){
    mongoose.model('cats').find(function (err, data) {
      
  

        resp.json(data);
        
  }).sort({price:1})
  })


   
module.exports = router;

 