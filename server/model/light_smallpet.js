
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const lightSmallpets = new schema({
       name:String,
       size:String,
       life_span:Number,
       weight:Number,
       color:String,
       price:Number,
       temperament:String,
       images:[String]},
       {collection:"lightSmallpets"}
);
module.exports=mongoose.model('lightSmallpets',lightSmallpets);