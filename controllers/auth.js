var bcrypt = require('bcryptjs');
var User = require('../models/user');

exports.post_login = function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    res.json({message: 'login'});
}

exports.post_register = async function(req, res, next) {
    const uname = req.body.username;
    const pword = req.body.password;

    bcrypt.hash(pword, 10, (err, hashedPassword) => {
        if (err) { return next(err); }
        const user = new User(
	  {
             username: uname,
             password: hashedPassword
	  }
	);
        try {	
	    user.save(function(err) {
                if (err) {return next(err)}
	        else {res.json({message: 'register'});}
            });
	} catch (error) {
            res.status(400).json({ error })
        }
    });
    //res.json({message: 'register'});
}
