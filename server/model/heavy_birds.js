var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var heavy_birds = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    img:[String]},
    {collection:"heavy_birds"}

);
mongoose.model("heavy_birds",heavy_birds);