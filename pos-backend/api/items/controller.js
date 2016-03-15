var items = require('./model');

exports.index = function (req, res) {
  items.find(function (err, items) {
    if (err) {
      return console.error(err);
    }
    return res.send(items[0]['items']);
  })
};

exports.create = function (req, res) {
  var itemsStr = JSON.stringify(req.body);

  items.remove(function (err) {
    var newItems = new items({items: itemsStr});
    newItems.save(function (err) {
      if (err) {
        return console.error(err);
      }
      return res.status(201).send(itemsStr);
    });
  });
};

exports.init = function (req, res) {
  var itemsSeed = [
    {
      "id": "0",
      "name": "可口可乐",
      "unit": "瓶",
      "price": 3.00
    },
    {
      "id": "1",
      "name": "雪碧",
      "unit": "瓶",
      "price": 3.00
    },
    {
      "id": "2",
      "name": "苹果",
      "unit": "斤",
      "price": 5.50
    },
    {
      "id": "3",
      "name": "荔枝",
      "unit": "斤",
      "price": 15.00
    },
    {
      "id": "4",
      "name": "电池",
      "unit": "个",
      "price": 2.00
    },
    {
      "id": "5",
      "name": "方便面",
      "unit": "袋",
      "price": 4.50
    }
  ];

  items.remove(function (err) {
    var newItems = new items({items: JSON.stringify(itemsSeed)});
    newItems.save(function (err) {
      if (err) {
        return console.error(err);
      }
      return res.status(201).send(itemsSeed);
    });
  });
};
