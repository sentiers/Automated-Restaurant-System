// --------------------------------------------------------
var router = require('express').Router();
var express = require('express');
var Menu = require('../models/menu');
var Order = require('../models/order');
router.use(express.static('./app'));
// --------------------------------------------------------
//==== 모든 메뉴 가져오기 =========================
function getAllMenu() {
    return new Promise(function (resolve, reject) {
      Menu.find()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(500);
        });
    });
};
//==== 모든 주문 가져오기 =========================
function getAllOrder() {
  return new Promise(function (resolve, reject) {
    Order.find()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(500);
      });
  });
};
//==== 주문 생성하는 함수 =========================
function createOrder(data) {
  data.order_list = JSON.parse(data.order_list);
  return new Promise(function (resolve, reject) {
      var newOrder = new Order(data);
      newOrder.save((err) => { // 메뉴 저장
          if (err) {
              reject(500);
          } else {
              resolve(201);
          }
      });
  });
};

//==== 메인 =============================
router.get('/', function (req, res, next) {
    res.redirect("/main");
});

router.get('/main', function (req, res, next) {
    getAllMenu()
        .then((Menudata) => {
          getAllOrder()
          .then((Orderdata) => {
            res.render('main', { Menudatas: Menudata, Orderdatas: Orderdata });
          }).catch((errcode) => {
            console.log("err");
          });
        }).catch((errcode) => {
            console.log("err");
        });
});
router.post('/main/createOrder', function (req, res, next) {
  createOrder(req.body)
      .then(() => {
          res.redirect('/main');
      }).catch((errcode) => {
          console.log(errcode);
      });
});
// --------------------------------------------------------


module.exports = router;





// 200: 요청이 성공적
// 201: 성공적으로 생성되었음
// 400: 잘못된 문법
// 401: 비인증 // jwt 잘못되어도 뜸
// 403: 권한부족
// 404: NOT FOUND
// 409: 리소스와 타켓리소스가 충돌
// 500: 서버에러