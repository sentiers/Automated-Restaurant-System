var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 관리자 스키마
var AdminSchema = new Schema({
  admin_id: String
});

var Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;