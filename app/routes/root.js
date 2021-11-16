// --------------------------------------------------------
var router = require('express').Router();
var express = require('express');
var Menu = require('../models/menu');
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
//==== 메인 =============================
router.get('/', function (req, res, next) {
    res.redirect("/main");
});

router.get('/main', function (req, res, next) {
    getAllMenu()
        .then((data) => {
            res.render('main', { datas: data });
        }).catch((errcode) => {
            console.log("err");
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