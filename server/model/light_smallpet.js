
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const lightSmallpets = new schema({
       image:[String],
       name:String,
       size:Number,
       life_span:Number,
       weight:Number,
       colors:String,
       price:Number,
       temperament:String},
       {collection:"lightSmallpets"}
);
module.exports=mongoose.model('lightSmallpets',lightSmallpets);