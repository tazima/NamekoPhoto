/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * User model
 */

var User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

User.virtual('id').get(function() {
  return this._id.toHexString();
});

// register mongoose models
module.exports = mongoose.model('User', User);
