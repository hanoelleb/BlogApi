
var Post = require('../models/post');

exports.post_create = function(req,res,next) {
    var postTitle = req.body.title;
    var postContent = req.body.content;
    console.log('got title and content');
    const post = new Post(
      {
	  title: postTitle,
	  content: postContent,
	  post_date: new Date(),
      }
    );
    console.log('made post');
    post.save(function(err) {
        if (err) {
            return next(err);
	}
        else {
	    res.json({message: 'posted'});
	}
    });
}

exports.post_update = function(req,res,next) {
    res.json({message: 'update post'})
}

exports.post_delete = function(req,res,next) {
    res.json({message: 'delete post'})
}

exports.post_list = function(req,res,next) {
    post.find()
        .sort([['date', 'ascending']]) 
	.exec( function(err, post_list) {
	    if (err) return next(err);
	    res.json({posts: {post_list} })
	});
}

exports.post_detail = function(req,res,next) {
    res.json({message: 'post detail'})
}
