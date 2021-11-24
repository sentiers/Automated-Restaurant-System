// --------------------------------------------------------
var router = require('express').Router();
var Admin = require('../models/admin');
var express = require('express');

router.use(express.static('./app'));

//----------------------------------------------------

//==== 관리자 아이디 체크 =========================
function adminLoginCheck(idData) {
  return new Promise(function (resolve, reject) {
    Admin.findOne({ admin_id: idData.admin_id })
      .then((admin) => {
        if (admin == null) {
          reject("올바르지 않은 ID입니다!");
        } else {
          resolve(admin.admin_id);
        }
      }).catch((err) => {
        console.log(err);
        reject("올바르지 않은 ID입니다!");
      });
  });
};

//----------------------------------------------------

//==== 관리자 기본 로그인 페이지 =======================
router.get("/", (req, res) => {
  res.render('login_manager');
});

//==== 관리자 로그인 =======================
router.post("/login", (req, res) => {
  adminLoginCheck(req.body)
    .then((idData) => {
      req.session.user = {
        admin_id: idData
      }
      res.redirect('/salespage');
    }).catch((err) => {
      res.render('login_manager', { err });
    });
});

//==== 관리자 세션종료 =======================
router.get("/logout", function (req, res) {
  console.log("bye");
  req.session.reset();
  res.redirect("/main");
});

module.exports = router;


// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const session = require("express-session");

// router.use(
//   session({ secret: "mycode", resave: true, saveUninitialized: false })
// );
// router.use(passport.initialize());
// router.use(passport.session());

// //----------------------------------------------------

// ////////////// 로그인 되어있나 체크 /////////////////
// function ensureLogin(req, res, next) {
//   if (!req.session.user) {
//     res.redirect("/admin");
//   } else {
//     next();
//   }
// }

// //----------------------------------------------------

// ////////////// 인증 /////////////////
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "admin_id",
//       passwordField: "admin_pw",
//       session: true,
//       passReqToCallback: false
//     },
//     (inputId, inputPw, done) => {
//       console.log(inputId, inputPw);
//       Admin.findOne({ id: inputId }, (err, obj) => {
//         if (err) {
//           return done(err);
//         }
//         console.log(obj);

//         // 아이디 존재하지 않음
//         if (!obj) {
//           return done(null, false, { message: "invalid id" });
//         }

//         // 아이디 존재하면 pw 비교
//         if (inputPw === obj.admin_pw) {
//           return done(null, obj); // 로그인 성공
//         } else {
//           return done(null, false, { message: "invalid pw" });
//         }
//       });
//     }
//   )
// );

// ////////////// 세션 생성 /////////////////
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// ////////////// 세션 데이터 찾기 /////////////////
// passport.deserializeUser((userid, done) => {
//   Admin.findOne({ id: userid }, (err, result) => {
//     done(null, result);
//   });
// });
