var cart = require('./model');

exports.index = function (req, res) {
  cart.find(function (err, cart) {
    if (err) {
      return console.error(err);
    }
    return res.send(cart);
  })
};

exports.create = function (req, res) {
  var cartStr = req.body.cart;
  
  cart.remove(function (err) {
    var newcart = new cart({cart: cartStr});
    newcart.save(function (err) {
      if (err) {
        return console.error(err);
      }
      return res.status(201).json(cartStr);
    });
  });
};

