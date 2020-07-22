
var Post = require('../models/post');

exports.post_create = function(req,res,next) {
    var postTitle = req.body.title;
    var postContent = req.body.content;

    const post = new Post(
      {
	  title: postTitle,
	  content: postContent,
	  post_date: new Date(),
      }
    );

    post.save(function(err) {
        if (err) {
            res.status(400).json({ message: error.toString()});
	}
        else {res.json({message: 'posted'});}
    });
}

exports.post_update = function(req,res,next) {
    res.json({message: 'update post'})
}

exports.post_delete = function(req,res,next) {
    res.json({message: 'delete post'})
}

exports.post_list = function(req,res,next) {
    res.json({message: 'post list'})
}

exports.post_detail = function(req,res,next) {
    res.json({message: 'post detail'})
}
