var receipts = require('./model');

exports.index = function (req, res) {
  receipts.find(function (err, receipts) {
    if (err) {
      return console.error(err);
    }
    return res.json(receipts);
  })
};

exports.create = function (req, res) {
  var receiptsStr = req.body.receipts;

  console.log(receiptsStr)

  receipts.remove(function (err) {
    var newReceipts = new receipts({receipts: receiptsStr});
    newReceipts.save(function (err) {
      if (err) {
        return console.error(err);
      }
      return res.status(201).json(receiptsStr);
    });
  });
};

