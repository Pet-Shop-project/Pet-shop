const mongoose = require("mongoose");
const schema = mongoose.Schema;
const normalSmallpet = new schema({
       image:Array,
       name:String,
       size:Number,
       life_span:Number,
       weight:Number,
       colors:String,
       price:Number,
       temperament:String
})
module.exports=mongoose.model('normalSmallpet',normalSmallpet);