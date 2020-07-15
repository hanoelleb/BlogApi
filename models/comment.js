var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
      post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
      date: {type: Date},
      author: {type: String, required: true, minlength: 2},
      content: {type: String, required: true},
  }
)

module.export = mongoose.model('Comment', CommentSchema);
