var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var itemController = require('../api/items/controller');
var cartController = require('../api/cart/controller');

mongoose.connect('mongodb://localhost/pos');

/* GET home page. */
router.get('/items', itemController.index);

router.get('/cart', cartController.index);

router.get('/receipts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/items', itemController.create);

router.post('/cart', cartController.create);

router.post('/receipts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
