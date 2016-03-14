var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var itemController = require('../api/items/controller');

mongoose.connect('mongodb://localhost/pos');

/* GET home page. */
router.get('/items', itemController.index);

router.get('/cart', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/receipts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/items', function(req, res, next) {
  console.log(req.body);
  res.render('index', { title: 'Express' });
});

router.post('/cart', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/receipts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
