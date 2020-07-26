var async = require('async');
var Post = require('../models/post');
var Comment = require('../models/post');

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
    var id = req.params.id;
    var postTitle = req.body.title;
    var postContent = req.body.content;


    var post = new Post({
      _id: id,
      title: postTitle,
      content: postContent,
    });

    Post.findByIdAndUpdate(id, post, {},
        function(err){ 
	    if(err) {
		console.log(err.message);
                return next(err);
	    }
            res.json({message: 'updated'});
	});
}

exports.post_delete = function(req,res,next) {
    var id = req.params.id;

    Post.findByIdAndRemove(id, function deleteBook(err) {
        if (err) { return next(err)}
        res.json({message: 'removed'});
    });
}

exports.post_list = function(req,res,next) {
    Post.find()
        .sort([['post_date', 'descending']]) 
	.exec( function(err, post_list) {
	    if (err) return next(err);
	    res.json({posts: {post_list} })
	});
}

exports.post_detail = function(req,res,next) {
    var id = req.params.id;
   
    async.parallel({
        post: function(callback){ Post.findById(id).exec(callback) },
	comments: function(callback){ Comment.find({'post': id})
            .exec(callback) }, 
    }, function(err, results) {
        if (err) { 
	    return next(err); }
	if (results.post == null) { //no post
	    res.json({message: "post not found"});
	}
	var thepost = results.post;
	var thecomments = results.comments;
	res.json({post: {thepost}, comments: {thecomments}});
    });
}
