//==== DEPENDENCIES =========================================
var express = require('express');
var path = require('path');
var app = express();

//==== 설정 =================
app.use(express.static(path.join(__dirname, 'app')));

//==== 몽고디비 연결 ==================================
var url =
  'mongodb+srv://dbUser:5star@restaurantmanagement.uq227.mongodb.net/5starDatabase?retryWrites=true&w=majority';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB 연결...'))
  .catch((err) => console.log(err));

//==== ROUTES ================================================
var root = require(__dirname + '/app/routes/root');

//==== ROUTING ===============================================
app.use('/', root);

//==== LISTEN TO THE SERVER =================================
app.listen(process.env.PORT || 8080, () =>
  console.log('localhost:8080 에서 서버 시작')
);