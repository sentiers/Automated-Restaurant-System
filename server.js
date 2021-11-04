
//==== DEPENDENCIES =========================================
var express = require('express');
var path = require('path');
var app = express();

//==== 설정 =================
app.use(express.static(path.join(__dirname, 'app')));




//==== 몽고디비 연결 ==================================




//==== ROUTES ================================================
var root = require(__dirname + '/app/routes/root');

//==== ROUTING ===============================================
app.use('/', root);

//==== LISTEN TO THE SERVER =================================
app.listen(process.env.PORT || 8080,
  () => console.log('localhost:8080 에서 서버 시작'));