var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 직원 스키마
var EmployeeSchema = new Schema({

});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;