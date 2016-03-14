var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    id: String,
    name: String,
    unit: String,
    price: Number
});


var item = mongoose.model('item', itemSchema);

module.exports = item;