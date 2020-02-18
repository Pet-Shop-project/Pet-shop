const mongoose = require("mongoose");
const schema = mongoose.Schema;
const allSmallpets = new schema({
       
       name:String,
       size:String,
       life_span:Number,
       weight:Number,
       color:String,
       price:Number,
       temperament:String,
       images:[String],
},
       {collection:"allSmallpets"}
)
module.exports=mongoose.model('allSmallpets',allSmallpets);