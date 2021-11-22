var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

// 주문 스키마
var OrderSchema = new Schema({
    // order_id
    order_list: [{ // 주문 정보
        menu: ObjectId, // 메뉴 id
        quantity: Number // 수량
    }],
    order_price: Number, // 주문 금액
    order_time: {type: Date, default: "2021-11-18"},  // 주문 시간
    order_state:{ // 처리 상태 (1: 대기열, 2: 완료)
        type: Number,
        default: 1
    }
});

var Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
