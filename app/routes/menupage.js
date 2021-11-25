// --------------------------------------------------------
var router = require('express').Router();
var express = require('express');
var Menu = require('../models/menu');
var Stock = require('../models/stock');
router.use(express.static('./app'));
// --------------------------------------------------------

//==== 모든 메뉴 가져오기 =========================
function getAllMenu() {
    return new Promise(function (resolve, reject) {
        Menu.find()
            .then(data => {
                resolve(data);
            }).catch((err) => {
                reject(500);
            });
    });
};

//==== 모든 재고가져오기 =========================
function getAllStock() {
    return new Promise(function (resolve, reject) {
      Stock.find()
        .then((data) => {
          resolve(data);
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
        newMenu.save((err) => { // 메뉴 저장
            if (err) {
                reject(500);
            } else {
                resolve(201);
            }
        });
    });
};

//==== 메뉴 생성하는 함수 =========================
function updateMenu(data, idData) {
    return new Promise(function (resolve, reject) {
        Menu.updateOne(
            { _id: idData },
            {
                $set: {
                    menu_name: data.menu_name,
                    menu_price: data.menu_price,
                    menu_calorie: data.menu_calorie,
                    menu_info: data.menu_info,
                    menu_img: data.menu_img
                }
            }
        ).then(() => {
            resolve(200);
        }).catch((err) => { // 메뉴를 찾을수없을때
            reject(404);
        });
    });
};

//==== 메뉴 id 별로 조회 함수 =========================
function getMenuById(idData) {
    return new Promise(function (resolve, reject) {
        Menu.findOne({
            _id: idData
        }).then(data => {
            resolve(data);
        }).catch((err) => { // 메뉴를 찾을수없을때
            reject(404);
        });
    });
};

//==== 메뉴 id 별로 조회 함수 =========================
function removeMenu(idData) {
    return new Promise(function (resolve, reject) {
        Menu.deleteOne({
            _id: idData
        }).then(() => {
            resolve(200);
        }).catch((err) => { // 메뉴를 찾을수없을때
            reject(404);
        });
    });
};


// ----------------------------------------------------------------


//==== 전체 메뉴조회 =============================
router.get('/', function (req, res, next) {
    getAllMenu()
        .then((data) => {
            res.render('menu', { datas: data });
        }).catch((errcode) => {
            console.log("err");
        });
});


//==== 메뉴 생성 =============================
router.get('/create', function (req, res, next) {
    getAllStock()
        .then((data) => {
            res.render('menu_create', { datas: data });
        }).catch((errcode) => {
            console.log("err");
        });
});

router.post('/create', function (req, res, next) {
    createMenu(req.body)
        .then(() => {
            res.redirect('/menupage');
        }).catch((errcode) => {
            console.log(errcode);
        });
});

//==== id와 일치하는 메뉴 조회 =============================
router.get('/:id', function (req, res, next) {
    getMenuById(req.params.id)
        .then((data) => {
            res.render('menu_view', data);
        }).catch((errcode) => {
            console.log(errcode);
        });
});


//====수정 =============================
router.post('/update/:id', function (req, res, next) {
    updateMenu(req.body, req.params.id)
        .then(() => {
            res.redirect('/menupage');
        }).catch((errcode) => {
            console.log(errcode);
        });
        
});

//====삭제 =============================
router.get('/remove/:id', function (req, res, next) {
    removeMenu(req.params.id)
        .then(() => {
            res.redirect('/menupage');
        }).catch((errcode) => {
            console.log(errcode);
        });
});

// --------------------------------------------------------
module.exports = router;
