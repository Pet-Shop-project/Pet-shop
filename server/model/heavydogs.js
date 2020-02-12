var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var heavydogs = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"heavydogs"}

);
mongoose.model("heavydogs",heavydogs);