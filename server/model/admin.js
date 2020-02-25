var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var admin = new Schema({
    email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  }
  
});

mongoose.model("admin",admin);