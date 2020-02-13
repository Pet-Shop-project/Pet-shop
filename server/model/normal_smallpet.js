const mongoose = require("mongoose");
const schema = mongoose.Schema;
const normalSmallpets = new schema({
       image:[String],
       name:String,
       size:String,
       life_span:Number,
       weight:Number,
       colors:String,
       price:Number,
       temperament:String},
       {collection:"normalSmallpets"}
)
module.exports=mongoose.model('normalSmallpets',normalSmallpets);