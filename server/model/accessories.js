var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var accessories = new Schema({
    name:String,
    length:Number,
    color:String,
    price:Number,
    images:String},
    {collection:"accessories"}
);
mongoose.model("accessories",accessories);