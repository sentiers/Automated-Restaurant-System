// --------------------------------------------------------
var router = require('express').Router();
var Employee = require('../models/employee');
// --------------------------------------------------------

//==== 현재 근무중인 직원들 가져오기=========================
function getAllCurrentEmployee() {
    return new Promise(function (resolve, reject) {
        Employee.find({
            employee_status: 1
        }).then(data => {
            resolve([200, data]);
        }).catch((err) => {
            reject(500);
        });
    });
};

//==== 직원 id 받아서 출퇴근 =========================
function getEmployeeById(idData) {
    return new Promise(function (resolve, reject) {
        Employee.findOne({ _id: idData }).then((employee) => {
            console.log(employee.employee_status);
            if (employee.employee_status == 0) { // 출근상태가아니면 
                Employee.updateOne(
                    { _id: idData },
                    {
                        $set: {
                            employee_status: 1 // 출근으로
                        }
                    }
                ).then(() => {
                    resolve(200);
                })
            } else if (employee.employee_status == 1) { // 출근상태면
                Employee.updateOne(
                    { _id: idData },
                    {
                        $set: {
                            employee_status: 0 // 퇴근으로
                        }
                    }
                ).then(() => {
                    resolve(200);
                })
            } else {
                reject(500)
            }
        }).catch((err) => { // 직원을 찾을수없을때
            reject(404);
        });
    });
};


// ----------------------------------------------------------------

//==== 현재 근무중인 직원들 조회 =============================
router.get('/current', function (req, res, next) {
    getAllCurrentEmployee()
        .then((data) => {
            res.status(data[0]).send(data[1]);
        }).catch((errcode) => {
            res.status(errcode).send(errcode + ": 실패");
        });
});

//==== id와 일치하는 직원 출퇴근 =============================
router.get('/employee/:id', function (req, res, next) {
    getEmployeeById(req.params.id)
        .then((code) => {
            res.status(code).send(code + ": 성공");
        }).catch((errcode) => {
            res.status(errcode).send(errcode + ": 실패");
        });
});


// --------------------------------------------------------
module.exports = router;