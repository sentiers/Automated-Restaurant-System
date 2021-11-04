var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID;

// 매출 스키마
var SaleSchema = new Schema({

});

var Sale = mongoose.model('Sale', SaleSchema);
module.exports = Sale;