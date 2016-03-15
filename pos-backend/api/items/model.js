var mongoose = require('mongoose');

var itemsSchema = mongoose.Schema({
    items: String
});


var items = mongoose.model('items', itemsSchema);

module.exports = items;
