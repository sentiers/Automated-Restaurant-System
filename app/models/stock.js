var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 재고 스키마
var StockSchema = new Schema({
    
});

var Stock = mongoose.model('Stock', StockSchema);
module.exports = Stock;