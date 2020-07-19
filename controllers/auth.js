var bcrypt = require('bcrypt');

var User = require('../models/user');

exports.post_login = function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    res.json({message: 'login'});
}

exports.post_register = function(req, res, next) {
    const uname = req.body.username;
    const pword = req.body.password;

    bcrypt.hash(pword, 10, (err, hashedPassword) => {
        if (err) { return next(err); }
        var user = new User(
	  {
             username: uname,
             password: hashedPassword
	  }
	);
	
	user.save(function(err) {
               if (err) {return next(err)};
               res.redirect('/blog');
           });

        res.json({message: 'register'});
    }
}
