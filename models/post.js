var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//posts can contain images, text, and video links.

var PostSchema = new Schema(
  {
      title: {type: String, required: true},
      post_date: {type: Date},
      images: [ {data: Buffer, contentType: String} ]
      content: {type: String},
      video: {type: String},
  }
);

module.export = mongoose.model('Post', PostSchema);
