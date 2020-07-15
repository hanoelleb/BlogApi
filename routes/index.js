var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth');
var postController = require('../controllers/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/api');
});

router.post('/api/login', authController.post_login);

router.post('/api/register', authController.post_register);

/* Post routes */
router.post('/api/post/create', postController.post_create);

router.post('/api/post/edit', postController.post_update);

router.post('/api/post/remove', postController.post_delete);

router.get('/api/post', postController.post_list);

router.get('/api/post/:id', postController.post_detail);                                                         

module.exports = router;
