var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var  payment= new Schema({
    card: {
        type: String,
        required: true
      },
    verification: {
        type: String,
        required: true
    }
});

mongoose.model("payment",payment);