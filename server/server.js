//==== DEPENDENCIES =========================================
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//==== 설정 =================
app.use(express.static(path.join(__dirname, "app")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//==== 몽고디비 연결 ==================================
var url =
  "mongodb+srv://dbUser:5star@restaurantmanagement.uq227.mongodb.net/5starDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB 연결..."))
  .catch(err => console.log(err));

//==== ROUTES ================================================
var root = require(__dirname + "/app/routes/root");
var login = require(__dirname + "/app/routes/login");
var employeepage = require(__dirname + "/app/routes/employeepage");
var menupage = require(__dirname + "/app/routes/menupage");
var orderpage = require(__dirname + "/app/routes/orderpage");
var admin = require(__dirname + "/app/routes/adminpage");

//==== ROUTING ===============================================
app.use("/", root);
app.use("/login", login);
app.use("/employeepage", employeepage);
app.use("/menupage", menupage);
app.use("/orderpage", orderpage);
app.use("/admin", adminpage);

//==== LISTEN TO THE SERVER =================================
app.listen(process.env.PORT || 8080, () =>
  console.log("localhost:8080 에서 서버 시작")
);
