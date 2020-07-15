var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'title'});
});

router.post('/login', authController.authPost);

module.exports = router;
