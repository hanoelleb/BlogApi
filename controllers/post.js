
exports.post_create = function(req,res,next) {
    res.json({message: 'create post'})
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
