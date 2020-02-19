var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var lightbirds = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"light_birds"}

);
mongoose.model("lightbirds",lightbirds);