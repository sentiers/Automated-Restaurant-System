var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

// 메뉴 스키마
var MenuSchema = new Schema({
  // menu_id
  menu_name: String,
  menu_price: Number,
  menu_calorie: Number,
  menu_img: String,
  menu_info: String,
  menu_ingr: [
    {
      ingr_name: String, // 재료 이름
      ingr_num: Number, // 재료 수량
    },
  ],
});

var Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;
