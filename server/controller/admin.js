var express = require('express')
var router = express.Router()
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var mongoose = require("mongoose");
var Admin = require('../model/admin')
var app = express();
var bodyParser = require('body-parser')
var Token = ''
function verifytoken(req, res, next) {
    let tokenadmin = req.query.tokenadmin;
    console.log(tokenadmin)
    jwt.verify(tokenadmin, 'Secret', (err, verifytoken) => {
      if (err)
        return res.status(400).json({
          Msg: 'Unauthorized'
        })
      if (verifytoken) {
        Token = verifytoken;      
        next();
      }
    })
  }

router.post('/login',verifytoken,(req, res, next) => {
    const {
      email,
      password
    } = req.body
    console.log(req.body)
    console.log("asd")
    mongoose.model("admin").findOne({
      email: email
    }).then(user => {
      console.log(user)
      if (!user) {
        res.status(501).json({
          Msg: 'Email Not Registered'
        });
      }
  
      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (isMatch) {
          let tokenadmin = jwt.sign({
            useremail: user.email
          }, 'Secret', {
            expiresIn: '3h'
          })
          // console.log(token)
          res.status(200).json(tokenadmin);
        } else {
          res.status(501).json({
            Msg: 'Password Does not Match'
          });
  
        }
      });
    });
  
  });


  module.exports = router;