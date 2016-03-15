var mongoose = require('mongoose');

var receiptsSchema = mongoose.Schema({
  receipts: String
});


var receipts = mongoose.model('receipts', receiptsSchema);

module.exports = receipts;
