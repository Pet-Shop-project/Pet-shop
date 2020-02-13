var express = require("express");
var mongoose = require("mongoose");
var fs = require("fs");
var app = express();
var cors=require("cors")

let heavy_cats=require("./controller/heavy-cats")
let light_cats=require("./controller/light-cats")
let normal_cats=require('./controller/normal-cats')
app.use(cors());
app.use("/PET-SHOP/heavy_cats", heavy_cats);
app.use("/PET-SHOP/light_cats", light_cats);
app.use("/PET-SHOP/normal_cats", normal_cats);


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
mongoose.connect("mongodb+srv://petshop:AAAAA@cluster0-mv8zv.mongodb.net/Pet_shop?retryWrites=true&w=majority");

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
