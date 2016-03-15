var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var itemsController = require('../api/items/controller');
var cartController = require('../api/cart/controller');
var receiptsController = require('../api/receipts/controller');

mongoose.connect('mongodb://localhost/pos');

/* GET home page. */
router.get('/', function (req, res) {
  res.sendfile('public/pos-web/pos-web/main/html/itemList.html');
});

router.post('/init', itemsController.init);

router.get('/items', itemsController.index);

router.get('/cart', cartController.index);

router.get('/receipts', receiptsController.index);

router.post('/items', itemsController.create);

router.post('/cart', cartController.create);

router.post('/receipts', receiptsController.create);

module.exports = router;
