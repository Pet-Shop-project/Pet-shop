var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var allbirds = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"allbirds"}

);
mongoose.model("allbirds",allbirds);