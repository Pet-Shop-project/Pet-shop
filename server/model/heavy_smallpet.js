const mongoose = require("mongoose");
const schema = mongoose.Schema;
const heavySmallpets = new schema({
       image:[String],
       name:String,
       size:String,
       life_span:Number,
       weight:Number,
       colors:String,
       price:Number,
       temperament:String},
       {collection:"heavySmallpets"}
)
module.exports=mongoose.model('heavySmallpets',heavySmallpets);