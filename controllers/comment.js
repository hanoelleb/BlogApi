var Comment = require('../models/comment');
var User = require('../models/user');

require('dotenv').config();
//comments have post, date, author, content
exports.comment_create = function(req, res, next) {

    console.log('check1');
    var _id = req.params.id;
    var _date = new Date();
    console.log('check2');
    var _author = req.body.author;
    var _content = req.body.content;
    console.log('check3');

    var comment = new Comment(
      {
          post : _id,
	  date: _date,
          author: _author,
          content: _content
      }
    );

    console.log('comment: ' + comment);

    comment.save( function(err) {
        if (err) {
            console.log('err: ' + err.message);
            return next(err);}
	else { res.json({message: 'comment added'}) };
    });
}

exports.comment_delete = function(req, res, next) {
    var id = req.params.id;

    Comment.findByIdAndRemove(id, function deleteComment(err) {
        if (err) { return next(err); }
	res.json({message: 'comment removed'});
    })
}
