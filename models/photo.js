/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    config = require('config'),
    conf = config.server;

/**
 * Photo model
 */

var Photo = new Schema({
  published: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  name: String
});

Photo.virtual('id').get(function() {
  return this._id.toHexString();
});

Photo.virtual('published_date')
  .get(function() {
    return this.published.toUTCString();
  });

Photo.virtual('path')
  .get(function() {
    return conf.blob_dir + this._id.toHexString();
  });

// register mongoose models
module.exports = mongoose.model('Photo', Photo);
