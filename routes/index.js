var express = require('express');
var router = express.Router();

var cors = require('cors');

var authController = require('../controllers/auth');
var postController = require('../controllers/post');

router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/api');
});

router.post('/api/login', authController.post_login);

router.post('/api/register', cors(), authController.post_register);

/* Post routes */
router.post('/api/post/create', postController.post_create);

router.post('/api/post/:id/edit', postController.post_update);

router.post('/api/post/:id/remove', postController.post_delete);

router.get('/api/posts', postController.post_list);

router.get('/api/post/:id', postController.post_detail);                                                         
module.exports = router;
