/*
 * photos resource.
 */

var fs = require('fs'),
    User = require("../models/user");

/*
 * save a user.
 */
exports.create = function(req, res){

  // TODO validate.

  // save a user to db.
  var user = new User();
  user.name = req.param('name');
  user.email = req.param('email');
  user.password = req.param('password');

  user.save(function(err) {
    if(err) throw err;
    res.redirect('/photos');
  });
};

