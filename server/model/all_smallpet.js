const mongoose = require("mongoose");
const schema = mongoose.Schema;
const allSmallpets = new schema({
       image:[String],
       name:String,
       size:String,
       life_span:Number,
       weight:Number,
       colors:String,
       price:Number,
       temperament:String},
       {collection:"allSmallpets"}
)
module.exports=mongoose.model('allSmallpets',allSmallpets);