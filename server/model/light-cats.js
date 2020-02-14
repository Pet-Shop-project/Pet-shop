var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var cats = new Schema({
    name:String,
    size:Number,
    life_span:Number,
    weight:Number,
    colors:String,
    price:Number,
    coat:String,
    images:[String]
},
{collection:"light-cats"}
);
mongoose.model("light_cats",cats);