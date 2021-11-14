// --------------------------------------------------------
var router = require("express").Router();
var Admin = require("../models/admin");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

router.use(
  session({ secret: "mycode", resave: true, saveUninitialized: false })
);
router.use(passport.initialize());
router.use(passport.session());

//----------------------------------------------------

////////////// 로그인 되어있나 체크 /////////////////
function ensureLogin(req, res, next) {
  if (!req.session.user) {
    res.redirect("/admin");
  } else {
    next();
  }
}

//----------------------------------------------------

////////////// 인증 /////////////////
passport.use(
  new LocalStrategy(
    {
      usernameField: "admin_id",
      passwordField: "admin_pw",
      session: true,
      passReqToCallback: false
    },
    (inputId, inputPw, done) => {
      console.log(inputId, inputPw);
      Admin.findOne({ id: inputId }, (err, obj) => {
        if (err) {
          return done(err);
        }
        console.log(obj);

        // 아이디 존재하지 않음
        if (!obj) {
          return done(null, false, { message: "invalid id" });
        }

        // 아이디 존재하면 pw 비교
        if (inputPw === obj.admin_pw) {
          return done(null, obj); // 로그인 성공
        } else {
          return done(null, false, { message: "invalid pw" });
        }
      });
    }
  )
);

////////////// 세션 생성 /////////////////
passport.serializeUser((user, done) => {
  done(null, user.id);
});

////////////// 세션 데이터 찾기 /////////////////
passport.deserializeUser((userid, done) => {
  Admin.findOne({ id: userid }, (err, result) => {
    done(null, result);
  });
});

//----------------------------------------------------

//==== 관리자 기본 로그인 페이지 =======================
router.get("/", (req, res) => {
  res.send("관리자 로그인 페이지입니다");
});

//==== 로그인 성공 시에 접속가능한 페이지 =================
router.get("/main", ensureLogin, (req, res) => {
  res.send("관리자 메인 페이지입니다");
});

//==== 로그인 실패 시에 연결되는 페이지 =================
router.get("/fail", (req, res) => {
  res.send("인증 실패");
});

//==== 로그인 시도 ====================================
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/admin/fail"
  }),
  (req, res) => {
    res.status(200).send("로그인 성공");
  }
);

// --------------------------------------------------------
module.exports = router;