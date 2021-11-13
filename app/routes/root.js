// --------------------------------------------------------
var router = require('express').Router();
var path = require('path');
// --------------------------------------------------------

//==== 메인 =============================
router.get('/', function (req, res, next) {
    res.redirect("/main");
});

router.get('/main', function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/main.html"));
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