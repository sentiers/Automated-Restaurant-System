// --------------------------------------------------------
var router = require('express').Router();
var path = require('path');
var express = require('express');
var Order = require('../models/order');
router.use(express.static('./app'));
// --------------------------------------------------------


//==== 모든 주문 가져오기 =========================
function getAllOrder() {
    return new Promise(function (resolve, reject) {
        Order.find()
            .then(data => {
                resolve(data);
            }).catch((err) => {
                reject(500);
            });
    });
};


// --------------------------------------------------------

//====매출관리페이지 메인=============================
router.get('/', function (req, res, next) {
    getAllOrder()
        .then((data) => {
            res.render('sales', { datas: data });
        }).catch((errcode) => {
            console.log("err");
        });
});

//====월=============================
router.get('/wol', function (req, res, next) {
    res.render('sales_wol');
});

//==== 메뉴 =============================
router.get('/menu', function (req, res, next) {
    res.render('sales_menu');
});

//====주문 =============================
router.get('/jumun', function (req, res, next) {
    res.render('sales_jumun');
});

// --------------------------------------------------------
module.exports = router;