const mongoose = require("mongoose");
const schema = mongoose.Schema;
const heavySmallpets = new schema({
       name:String,
       size:String,
       life_span:Number,
       weight:Number,
       color:String,
       price:Number,
       temperament:String,
       images:[String]},
       {collection:"heavySmallpets"}
)
module.exports=mongoose.model('heavySmallpets',heavySmallpets);