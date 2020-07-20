var express = require('express');
var router = express.Router();
var passport = require('passport');

require('../passport');

var authController = require('../controllers/auth');
var postController = require('../controllers/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/api');
});

router.post('/api/login', authController.post_login);

router.post('/api/register', authController.post_register);

/* Post routes */
router.post('/api/post/create', 
    passport.authenticate('jwt', {session: false}),
    postController.post_create);

router.post('/api/post/:id/edit', 
    passport.authenticate('jwt', {session: false}),
    postController.post_update);

router.post('/api/post/:id/remove', 
    passport.authenticate('jwt', {session: false}),
    postController.post_delete);

router.get('/api/posts', postController.post_list);

router.get('/api/post/:id', postController.post_detail);                                                         
module.exports = router;
