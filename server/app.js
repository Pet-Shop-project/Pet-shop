var express = require("express");
var mongoose = require("mongoose");
const cors=require("cors");
var fs = require("fs");
var smallpet_heavy=require('./controller/smallpet_heavy')
var smallpet_light=require('./controller/smallpet_light')
var smallpet_normal=require('./controller/smallpet_normal')
var smallpet_all=require('./controller/smallpet_all')

var app = express();
app.use(cors());
app.use('/PET-SHOP/heavy_pet',smallpet_heavy)
app.use('/PET-SHOP/light_pet',smallpet_light)
app.use('/PET-SHOP/normal_pet',smallpet_normal)
app.use('/PET-SHOP/all_pet',smallpet_all)

app.use(express.static("public"));
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.set("viewengine", "ejs");
app.set("views", "./views");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://petshop:AAAAA@cluster0-mv8zv.mongodb.net/Pet_shop?retryWrites=true&w=majority",function(){
  console.log('db connected')
});

mongoose.connection.on("error", err => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(1);
  });

  var files_arr = fs.readdirSync(__dirname + "/model");
files_arr.forEach(function (file) {
  require(__dirname + "/model/" + file);
});

  app.listen(3000, function () {
    console.log("server on port 3000");
  
  });
