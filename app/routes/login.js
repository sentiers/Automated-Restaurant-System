// --------------------------------------------------------
var router = require('express').Router();
var Employee = require('../models/employee');
// --------------------------------------------------------

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


//==== 현재 근무중인 직원들 가져오기=========================
function getAllCurrentEmployee() {
    return new Promise(function (resolve, reject) {
        Employee.find({
            employee_status: 1
        }).then(data => {
            resolve(data);
        }).catch((err) => {
            reject(500);
        });
    });
};

//==== 직원 id 받아서 출근 =========================
function setEmployeeIn(idData) {
    return new Promise(function (resolve, reject) {
        Employee.findOne({ _id: idData._id }).then((employee) => {
            if (employee.employee_status == 0) { // 출근상태가아니면 
                Employee.updateOne(
                    { _id: idData._id },
                    {
                        $set: {
                            employee_status: 1 // 출근으로
                        },
                        $push: {
                            employee_record: {
                                $each: [{
                                    record_info: "출근",
                                    record_time: getCurrentDateTime().getFullYear() + "년 "
                                        + getCurrentDateTime().getMonth() + "월 "
                                        + getCurrentDateTime().getDate() + "일 "
                                        + getCurrentDateTime().getHours() + "시 "
                                        + getCurrentDateTime().getMinutes() + "분 "
                                        + getCurrentDateTime().getSeconds() + "초 "
                                }],
                                $position: 0
                            }
                        }
                    }
                ).then(() => {
                    resolve(200);
                })
            } else {
                reject("이미 출근상태입니다!") // 이미 출근상태일때
            }
        }).catch((err) => { // 직원을 찾을수없을때
            reject("올바르지 않은 ID입니다!");
        });
    });
};

//==== 직원 id 받아서 퇴근 =========================
function setEmployeeOut(idData) {
    return new Promise(function (resolve, reject) {
        Employee.findOne({ _id: idData._id }).then((employee) => {
            if (employee.employee_status == 1) { // 출근상태면
                Employee.updateOne(
                    { _id: idData._id },
                    {
                        $set: {
                            employee_status: 0 // 퇴근으로
                        },
                        $push: {
                            employee_record: {
                                $each: [{
                                    record_info: "퇴근",
                                    record_time: getCurrentDateTime().getFullYear() + "년 "
                                        + getCurrentDateTime().getMonth() + "월 "
                                        + getCurrentDateTime().getDate() + "일 "
                                        + getCurrentDateTime().getHours() + "시 "
                                        + getCurrentDateTime().getMinutes() + "분 "
                                        + getCurrentDateTime().getSeconds() + "초 "
                                }],
                                $position: 0
                            }
                        }
                    }
                ).then(() => {
                    resolve(200);
                })
            } else {
                reject("이미 퇴근상태입니다!") // 이미 퇴근일때
            }
        }).catch((err) => { // 직원을 찾을수없을때
            reject("올바르지 않은 ID입니다!");
        });
    });
};


// ----------------------------------------------------------------


//====출근 로그인 페이지=============================
router.get('/in', function (req, res, next) {
    getAllCurrentEmployee()
        .then((data) => {
            res.render('login_employee_in', { datas: data });
        }).catch((errcode) => {
            console.log("err");
        });
});

//====퇴근 로그인 페이지=============================
router.get('/out', function (req, res, next) {
    getAllCurrentEmployee()
        .then((data) => {
            res.render('login_employee_out', { datas: data });
        }).catch((errcode) => {
            console.log("err");
        });
});


//==== id와 일치하는 직원 출근 =============================
router.post('/in', function (req, res, next) {
    setEmployeeIn(req.body)
        .then(() => {
            res.redirect('/main');
        }).catch((err) => {
            getAllCurrentEmployee()
                .then((data) => {
                    res.render('login_employee_in', { datas: data, err });
                });
        });
});

//==== id와 일치하는 직원 퇴근 =============================
router.post('/out', function (req, res, next) {
    setEmployeeOut(req.body)
        .then(() => {
            res.redirect('/main');
        }).catch((err) => {
            getAllCurrentEmployee()
                .then((data) => {
                    res.render('login_employee_out', { datas: data, err });
                });
        });
});

// --------------------------------------------------------
module.exports = router;