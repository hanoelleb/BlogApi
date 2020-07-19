
exports.post_login = function(req, res, next) {
    res.json({message: 'login'});
}

exports.post_register = function(req, res, next) {
    console.log(req.body.username);
    res.json({message: 'register'});
}
