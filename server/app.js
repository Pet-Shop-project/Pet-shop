var express = require("express");
var mongoose = require("mongoose");
var fs = require("fs");
var app = express();
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
mongoose.connect("mongodb+srv://petshop:AAAAA@cluster0-mv8zv.mongodb.net/test?retryWrites=true&w=majority");

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
