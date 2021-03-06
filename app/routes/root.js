// --------------------------------------------------------
var router = require('express').Router();
var express = require('express');
var Menu = require('../models/menu');
var Order = require('../models/order');
var Stock = require('../models/stock');
var delay = require('delay');
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
    newOrder.save((err) => { // 주문 저장
      if (err) {
        reject(500);
      } else {
        resolve(201);
      }
    });
  });
};
//==== 주문 완료하는 함수 =========================
function updateOrder(data, idData) {
  return new Promise(function (resolve, reject) {
    Order.updateOne(
      { _id: idData },
      {
        $set: {
          order_state: data.order_state
        }
      }
    ).then(() => {
      resolve(200);
    }).catch((err) => { // 직원을 찾을수없을때
      reject(404);
    });
  });
};

//==== 재고 차감하는 함수 =========================
function updateStock(idData) {
  return new Promise(function (resolve, reject) {
    Order.findOne({ _id: idData }
    ).then((order) => {

      var findMenu = async (orderlists) => {
        for (const orderlist of orderlists) { // 메뉴당 루프
          await delay().then(() => { // 루프를 위한 딜레이
            Menu.findOne(
              { _id: orderlist.menu }
            ).then((menu) => {
              findStock(menu.menu_ingr, orderlist.quantity)
            })
          })
        }
      }

      var findStock = async (ingrlists, quantity) => {
        for (const ingr of ingrlists) { // 재고당 루프
          await delay().then(() => { // 루프를 위한 딜레이
            Stock.updateOne(
              { stock_name: ingr.ingr_name },
              {
                $inc: {
                  stock_quantity: - (ingr.ingr_quantity * quantity)
                }
              }
            ).exec();
          })
        }
      }

      findMenu(order.order_list).then(() => { // 실행하는 부분
        resolve(200);
      });

    }).catch((err) => { // 직원을 찾을수없을때
      console.log(err);
      reject(404);
    });
  });
};

// --------------------------------------------------------

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
//==== 주문 생성 =============================
router.post('/main/createOrder', function (req, res, next) {
  createOrder(req.body)
    .then(() => {
      res.redirect('/main');
    }).catch((errcode) => {
      console.log(errcode);
    });
});
//==== 주문 완료 =============================
router.post('/main/update/:id', function (req, res, next) {
  updateOrder(req.body, req.params.id)
    .then(() => {
      updateStock(req.params.id)
        .then(() => {
          res.redirect('/main');
        }).catch((errcode) => {
          console.log(errcode);
        });
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