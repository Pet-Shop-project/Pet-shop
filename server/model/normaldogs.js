var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var normaldogs = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"normaldogs"}

);
mongoose.model("normaldogs",normaldogs);