var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost/pos');

var itemSchema = mongoose.Schema({
  id: String,
  name: String,
  unit: String,
  price: Number
});

var item = mongoose.model('item', itemSchema);

var newItem = new item({id: '0'});

newItem.save(function (err) {
  if (err) {
    return console.error(err);
  }
});

/* GET home page. */
router.get('/items', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cart', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/receipts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/items', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cart', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/receipts', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
