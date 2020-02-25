var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var allshoppets = new Schema({
    name:String,
    size:String,
    life_span:Number,
    weight:Number,
    color:String,
    price:Number,
    temperament:String,
    images:[String]
    // userId:[{
    //     type : Schema.Types.ObjectId,
    //     ref : "UserSchema",
    //     required : true
    //   }]
},
    {collection:"allshoppets"}

);
module.exports= mongoose.model("allshoppets",allshoppets);
