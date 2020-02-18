const mongoose = require("mongoose");
const schema = mongoose.Schema;
const normalSmallpets = new schema({
       name:String,
       size:String,
       life_span:Number,
       weight:Number,
       color:String,
       price:Number,
       temperament:String,
       images:[String]},
       {collection:"normalSmallpets"}
)
module.exports=mongoose.model('normalSmallpets',normalSmallpets);