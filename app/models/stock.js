var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 재고 스키마
var StockSchema = new Schema({
    // stock_id
    stock_name: String, // 재고 이름
    stock_quantity: Number, // 현재 수량
    stock_order:{ // 발주 정보
        order_company: String, // 납품업체명
        order_unit: String, // 단위
        order_price: Number, // 가격
        order_phone: String // 전화번호
    }
});

var Stock = mongoose.model('Stock', StockSchema);
module.exports = Stock;