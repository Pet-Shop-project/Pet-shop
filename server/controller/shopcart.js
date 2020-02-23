var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var allshoppets = require('../model/allshoppets')
var user = require('../controller/user')
var parseUrlencoded = bodyParser.urlencoded({
  extended: true
});


router.get('/show', function (req, res) {
  req.newUser
    .populate('cart.items.productId')
    .execPopulate() //to return promis
    .then(newUser => {
      const products = newUser.cart.items;
      res.json(products);
      console.log(req.newUser)

    })
    .catch(err => console.log(err));
})

router.get('/cart/:id', function (req, res) {
  var id = req.params.id;
  console.log(id)
  // var _id=req.body.proId;
  allshoppets.findById(id)
    .then(product => {
      console.log(product);
      return req.userId.addToCart(product);
    }).then(result => {
      console.log(result);
    });

})


router.get('/deleteCart/:id', function (req, res) {
  var id = req.params.id;
  req.user
    .removeFromCart(id).then(result => {
      console.log('item Deleted');
    })
    .catch(err => console.log(err));
})
module.exports = router;
