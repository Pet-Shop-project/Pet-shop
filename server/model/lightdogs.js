var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var lightdogs = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"lightdogs"}

);
mongoose.model("lightdogs",lightdogs);