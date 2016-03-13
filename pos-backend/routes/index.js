var express = require('express');
var router = express.Router();

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
