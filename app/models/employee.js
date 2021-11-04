var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 직원 스키마
var EmployeeSchema = new Schema({
  // employee_id
  employee_name: String, // 이름
  employee_contact: String, // 전화번호
  employee_field: String, // 직무
  employee_status: Number, // 현재 상태 출근 = 1, 퇴근 = 0
  employee_record: [
    {
      recordDate: Date, // 기록 날짜
      attend: String, // 출근 시간
      off: String, //퇴근 시간
    },
  ],
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
