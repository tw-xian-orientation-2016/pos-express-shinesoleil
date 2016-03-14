var items = require('./model');

exports.index = function (req, res) {
  items.find(function (err, items) {
    if (err) {
      return console.error(err);
    }
    return res.json(items);
  })
};

exports.create = function (req, res) {
  var itemsStr = req.body.items;

  console.log(typeof items);
  items.remove(function (err) {
    var newItems = new items({items: itemsStr});
    newItems.save(function (err) {
      if (err) {
        return console.error(err);
      }
      return res.status(201).json(itemsStr);
    });
  });
};
