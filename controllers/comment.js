var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var passport = require('passport');

require('../passport');

var Comment = require('../models/comment');
var User = require('../models/user');

require('dotenv').config();

exports.comment_create = function(req, res, next) {
    res.json("creating comment");
}

exports.comment_delete = function(req, res, next) {
    res.json("removing comment");
}
