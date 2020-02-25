// var jwt = require('jsonwebtoken');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
      type: String,
      required: true
    }
    // cart: {
    //   items: [{
    //     productId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'allshoppets',
    //       required: true
    //     },
    //     quantity: {
    //       type: Number,
    //       required: true
    //     }
    //   }]
    // }
  },
  {
    collection: "UserSchema"
  }
);
// UserSchema.methods.addToCart=function(product){       
//     const cartProductIndex = this.cart.items.findIndex(cp => {
//         return  cp.productId.toString() === product._id.toString();
//        });
//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];
          
//     if (cartProductIndex >= 0) {
//        newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//        updatedCartItems[cartProductIndex].quantity = newQuantity;
//     } else {
//        updatedCartItems.push({
//        productId:product._id ,
//        quantity: newQuantity 
//          });
//       }
//     const updatedCart = {items: updatedCartItems};
//     this.cart=updatedCart;
//     return this.save(); 
//   }
  
//   UserSchema.methods.removeFromCart=function(productId){
//     const updatedCartItems=this.cart.items.filter(item =>{
//         return (item.productId.toString()!==productId.toString())
//     })
//     this.cart.items=updatedCartItems;
//     return this.save();
//   }   
//   function validateuser(user) {
//     var schema = {
//       name: jwt.string().required(),
//       email: jwt.string().required(),
//       password: jwt.string().required()
//     };
//     return jwt.validate(user, schema)
//   }
  
//   exports.validate = validateuser;
// var user=mongoose.model("user",user);
// module.exports = user;
const User = mongoose.model('User', UserSchema);
module.exports = User;
