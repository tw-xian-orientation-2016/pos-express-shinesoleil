var item = require('./model');

exports.index = function (req, res) {
  item.find(function (err, items) {
    if (err) {
      return console.error(err);
    }
    return res.json(items);
  })
};
