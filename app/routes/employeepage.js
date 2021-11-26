// --------------------------------------------------------
var router = require('express').Router();
var express = require('express');
var Employee = require('../models/employee');
router.use(express.static('./app'));
// --------------------------------------------------------

//==== 모든 직원 가져오기 =========================
function getAllEmployee() {
    return new Promise(function (resolve, reject) {
        Employee.find()
            .then(data => {
                resolve(data);
            }).catch((err) => {
                reject(500);
            });
    });
};

//==== 직원 생성하는 함수 =========================
function createEmployee(data) {
    return new Promise(function (resolve, reject) {
        var newEmployee = new Employee(data);
        var idString = newEmployee._id.toString();
        newEmployee.employee_id = idString.substr(idString.length - 4);
        newEmployee.save((err) => { // 새 직원 저장
            if (err) {
                reject(500);
            } else {
                resolve(201);
            }
        });
    });
};

//==== 직원 수정하는 함수 =========================
function updateEmployee(data, idData) {
    return new Promise(function (resolve, reject) {
        Employee.updateOne(
            { _id: idData },
            {
                $set: {
                    employee_name: data.employee_name,
                    employee_position: data.employee_position,
                    employee_contact: data.employee_contact
                }
            }
        ).then(() => {
            resolve(200);
        }).catch((err) => { // 직원을 찾을수없을때
            reject(404);
        });
    });
};

//==== 직원 id 별로 조회 함수 =========================
function getEmployeeById(idData) {
    return new Promise(function (resolve, reject) {
        Employee.findOne({
            _id: idData
        }).then(data => {
            resolve(data);
        }).catch((err) => { // 직원을 찾을수없을때
            reject(404);
        });
    });
};

//==== 직원 id 별로 조회 함수 =========================
function removeEmployee(idData) {
    return new Promise(function (resolve, reject) {
        Employee.deleteOne({
            _id: idData
        }).then(() => {
            resolve(200);
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
            res.render('employee', { datas: data });
        }).catch((errcode) => {
            console.log("err");
        });
});


//==== 직원 생성 =============================
router.get('/create', function (req, res, next) {
    res.render('employee_create');
});

router.post('/create', function (req, res, next) {
    createEmployee(req.body)
        .then(() => {
            res.redirect('/employeepage');
        }).catch((errcode) => {
            console.log(errcode);
        });
});

//==== id와 일치하는 직원 조회 =============================
router.get('/:id', function (req, res, next) {
    getEmployeeById(req.params.id)
        .then((data) => {
            res.render('employee_view', data);
        }).catch((errcode) => {
            console.log(errcode);
        });
});


//==== 직원 수정 =============================
router.post('/update/:id', function (req, res, next) {
    updateEmployee(req.body, req.params.id)
        .then(() => {
            res.redirect('/employeepage');
        }).catch((errcode) => {
            console.log(errcode);
        });
});

//==== 직원 삭제 =============================
router.get('/remove/:id', function (req, res, next) {
    removeEmployee(req.params.id)
        .then(() => {
            res.redirect('/employeepage');
        }).catch((errcode) => {
            console.log(errcode);
        });
});

// --------------------------------------------------------
module.exports = router;
