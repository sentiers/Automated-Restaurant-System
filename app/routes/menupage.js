// --------------------------------------------------------
var router = require('express').Router();
var Menu = require('../models/menu');
var path = require('path');
// --------------------------------------------------------

//==== 모든 메뉴 가져오기 =========================
function getAllMenu() {
  return new Promise(function (resolve, reject) {
    Menu.find()
      .then((data) => {
        resolve([200, data]);
      })
      .catch((err) => {
        reject(500);
      });
  });
}

//==== 메뉴 생성하는 함수 =========================
function createMenu(data) {
  return new Promise(function (resolve, reject) {
    var newMenu = new Menu(data);
    newMenu.save((err) => {
      // 새 메뉴 저장
      if (err) {
        reject(500);
      } else {
        resolve(201);
      }
    });
  });
}

//==== 메뉴 id 별로 조회 함수 =========================
function getMenuById(idData) {
  return new Promise(function (resolve, reject) {
    Menu.findOne({
      _id: idData,
    })
      .then((data) => {
        resolve([200, data]);
      })
      .catch((err) => {
        // 메뉴를 찾을수없을때
        reject(404);
      });
  });
}

// ----------------------------------------------------------------


//==== 전체 메뉴조회 =============================
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, "../views/menu.html"));
});


//==== 메뉴 생성 =============================
router.post('/create', function (req, res, next) {
  createMenu(req.body)
    .then((code) => {
      res.status(code).send(code + ': 성공');
    })
    .catch((errcode) => {
      res.status(errcode).send(errcode + ': 실패');
    });
});

//==== id와 일치하는 메뉴 조회 =============================
router.get('/:id', function (req, res, next) {
  getMenuById(req.params.id)
    .then((data) => {
      res.status(data[0]).send(data[1]);
    })
    .catch((errcode) => {
      res.status(errcode).send(errcode + ': 실패');
    });
});

// --------------------------------------------------------
module.exports = router;
