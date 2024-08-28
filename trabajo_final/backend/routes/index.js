var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

var router = express.Router();
router.get("/", function(req, res, next){
  res.render('admin/login', {
    layout: "admin/layout"
});
});

module.exports = router;
