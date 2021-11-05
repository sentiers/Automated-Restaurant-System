var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 직원 스키마
var EmployeeSchema = new Schema({
  // employee_id
  employee_name: String, // 이름
  employee_contact: String, // 전화번호
  employee_position: String, // 직무
  employee_status: { // 현재 상태 출근 = 1, 퇴근 = 0
    type: Number,
    default: 0
  },
  employee_record: [{
    record_info: String, // 출근인지 퇴근인지
    record_time: Date // 시간
  }]
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
