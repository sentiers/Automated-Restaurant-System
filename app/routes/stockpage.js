// --------------------------------------------------------
var router = require('express').Router();
var path = require('path');
// --------------------------------------------------------

//====  =============================
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, "../views/stock.html"));
});

// --------------------------------------------------------
module.exports = router;