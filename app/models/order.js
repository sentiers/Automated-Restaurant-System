var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

// 현재 날짜, 시간 반환하는 함수
function getCurrentDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
};


// 주문 스키마
var OrderSchema = new Schema({
    // order_id
    order_list: [{ // 주문 정보
        menu: ObjectId, // 메뉴 id
        quantity: Number // 수량
    }],
    order_price: Number, // 주문 금액
    order_time: { type: Date, default: getCurrentDateTime() },  // 주문 시간
    order_state: { // 처리 상태 (1: 대기열, 2: 완료)
        type: Number,
        default: 1
    }
});

var Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
