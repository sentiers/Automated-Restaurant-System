// server heroku link
// https://intense-forest-57450.herokuapp.com/

//==== DEPENDENCIES =========================================
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var clientSessions = require("client-sessions");


//==== 설정 =================
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/app/views'))
app.set('view engine', 'ejs');
app.use(clientSessions({
  cookieName: "session",
  secret: "5star",
  duration: 2 * 60 * 60 * 1000, // 2시간 지속
  activeDuration: 1000 * 60 * 5 // active하면 이만큼 계속 연장
}));
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

//==== 몽고디비 연결 ==================================
var url =
  'mongodb+srv://dbUser:5star@restaurantmanagement.uq227.mongodb.net/5starDatabase?retryWrites=true&w=majority';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB 연결...'))
  .catch((err) => console.log(err));

//==== ROUTES ================================================
var root = require(__dirname + '/app/routes/root');
var login = require(__dirname + "/app/routes/login");
var admin = require(__dirname + "/app/routes/admin");
var employeepage = require(__dirname + '/app/routes/employeepage');
var menupage = require(__dirname + '/app/routes/menupage');
var stockpage = require(__dirname + '/app/routes/stockpage');
var salespage = require(__dirname + '/app/routes/salespage');

// === CHECK ADMIN LOGIN =====================================
function ensureLogin(req, res, next) {
  if (!req.session.user) {
    res.redirect("/admin");
  } else {
    next();
  }
}

//==== ROUTING ===============================================
app.use('/', root);
app.use("/login", login);
app.use("/admin", admin);
app.use('/employeepage', ensureLogin, employeepage);
app.use('/menupage', ensureLogin, menupage);
app.use('/stockpage', ensureLogin, stockpage);
app.use('/salespage', ensureLogin, salespage);


//==== LISTEN TO THE SERVER =================================
app.listen(process.env.PORT || 8080, () =>
  console.log('localhost:8080 에서 서버 시작')
);
