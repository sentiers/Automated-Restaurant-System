// --------------------------------------------------------
var router = require('express').Router();
var path = require('path');
var express = require('express');
var Order = require('../models/order');
var Menu = require('../models/menu');
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

function getAllMenuAndOrder() {
    return new Promise(function (resolve, reject) {
        Order.find()
            .then(order => {
                resolve(order);
            }).catch((err) => {
                reject(5001);
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
    getAllOrder()
        .then((data) => {
            res.render('sales_wol', { datas: data });
        }).catch((errcode) => {
            console.log("err");
        });});

//==== 메뉴 =============================
router.get('/menu', function (req, res, next) {
    Order.find({}, function (err, data) {
        Menu.find({}, function (err, menu) {
            res.render('sales_menu', {datas:data, menus: menu});
        });
    });
    
});

//====주문 =============================
router.get('/jumun', function (req, res, next) {
    Order.find({}, function (err, data) {
        Menu.find({}, function (err, menu) {
            res.render('sales_jumun', {datas:data, menus: menu});
        });
    });
});

// --------------------------------------------------------
module.exports = router;