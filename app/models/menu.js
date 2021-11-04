var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

// 메뉴 스키마
var MenuSchema = new Schema({

});

var Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;