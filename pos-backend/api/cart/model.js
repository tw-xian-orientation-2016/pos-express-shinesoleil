var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
  cart: String
});


var cart = mongoose.model('cart', cartSchema);

module.exports = cart;
