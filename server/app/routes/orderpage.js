// --------------------------------------------------------
var router = require("express").Router();
var Order = require("../models/order");
// --------------------------------------------------------

//==== 모든 주문 가져오기 =========================
function getAllOrder() {
  return new Promise(function(resolve, reject) {
    Order.find()
      .then(data => {
        resolve([200, data]);
      })
      .catch(err => {
        reject(500);
      });
  });
}

//==== 주문 생성하는 함수 =========================
function createOrder(data) {
  return new Promise(function(resolve, reject) {
    var newOrder = new Order(data);
    newOrder.save(err => {
      // 새 주문 저장
      if (err) {
        reject(500);
      } else {
        resolve(201);
      }
    });
  });
}

//==== 주문 id 별로 조회 함수 =========================
function getOrderById(idData) {
  return new Promise(function(resolve, reject) {
    Order.findOne({
      _id: idData
    })
      .then(data => {
        resolve([200, data]);
      })
      .catch(err => {
        // 주문을 찾을수없을때
        reject(404);
      });
  });
}

// ----------------------------------------------------------------

//==== 전체 주문 조회 =============================
router.get("/", function(req, res, next) {
  getAllOrder()
    .then(data => {
      res.status(data[0]).send(data[1]);
    })
    .catch(errcode => {
      res.status(errcode).send(errcode + ": 실패");
    });
});

//==== 주문 생성 =============================
router.post("/create", function(req, res, next) {
  createOrder(req.body)
    .then(code => {
      res.status(code).send(code + ": 성공");
    })
    .catch(errcode => {
      res.status(errcode).send(errcode + ": 실패");
    });
});

//==== id와 일치하는 주문 조회 =============================
router.get("/:id", function(req, res, next) {
  getOrderById(req.params.id)
    .then(data => {
      res.status(data[0]).send(data[1]);
    })
    .catch(errcode => {
      res.status(errcode).send(errcode + ": 실패");
    });
});

// --------------------------------------------------------
module.exports = router;
