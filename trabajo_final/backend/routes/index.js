var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

var router = express.Router();
router.get("/", function(req, res, next){
  res.redirect('./admin/login');
});

module.exports = router;
