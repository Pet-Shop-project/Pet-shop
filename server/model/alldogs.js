var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var alldogs = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"alldogs"}

);
mongoose.model("alldogs",alldogs);