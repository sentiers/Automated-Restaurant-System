var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 관리자 스키마
var AdminSchema = new Schema({
  // employee_id
  admin_id: String, // 아이디
  admin_pw: String // 비밀번호
});

var Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;