var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var accessories = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]},
    {collection:"accessories"}
);
module.exports= mongoose.model("accessories",accessories);