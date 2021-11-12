// --------------------------------------------------------
var router = require('express').Router();
var Employee = require('../models/employee');
// --------------------------------------------------------

//==== 모든 직원 가져오기 =========================
function getAllEmployee() {
    return new Promise(function (resolve, reject) {
        Employee.find()
            .then(data => {
                resolve([200, data]);
            }).catch((err) => {
                reject(500);
            });
    });
};

//==== 직원 생성하는 함수 =========================
function createEmployee(data) {
    return new Promise(function (resolve, reject) {
        var newEmployee = new Employee(data);
        newEmployee.save((err) => { // 새 직원 저장
            if (err) {
                reject(500);
            } else {
                resolve(201);
            }
        });
    });
};

//==== 직원 id 별로 조회 함수 =========================
function getEmployeeById(idData) {
    return new Promise(function (resolve, reject) {
        Employee.findOne({
            _id: idData
        }).then(data => {
            resolve([200, data]);
        }).catch((err) => { // 직원을 찾을수없을때
            reject(404);
        });
    });
};

// ----------------------------------------------------------------

//==== 전체 직원조회 =============================
router.get('/', function (req, res, next) {
    getAllEmployee()
        .then((data) => {
            res.status(data[0]).send(data[1]);
        }).catch((errcode) => {
            res.status(errcode).send(errcode + ": 실패");
        });
});

//==== 직원 생성 =============================
router.post('/create', function (req, res, next) {
    createEmployee(req.body)
        .then((code) => {
            res.status(code).send(code + ": 성공");
        }).catch((errcode) => {
            res.status(errcode).send(errcode + ": 실패");
        });
});

//==== id와 일치하는 직원 조회 =============================
router.get('/:id', function (req, res, next) {
    getEmployeeById(req.params.id)
        .then((data) => {
            res.status(data[0]).send(data[1]);
        }).catch((errcode) => {
            res.status(errcode).send(errcode + ": 실패");
        });
});

// --------------------------------------------------------
module.exports = router;
