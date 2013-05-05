/*
 * photos resource.
 */

var fs = require('fs'),
    Photo = require("../models/photo");

/*
 * delete a photo.
 */
exports.destroy = function(req, res){

  var targetFileId = req.params.photo;

  // find metadata.
  Photo.findById(targetFileId , function(err, photo) {
    // delete binary file.
    fs.unlink(photo.path, function() {
      if (err) throw err;
      // delete metadata from dbs
      photo.remove();

      res.redirect('/photos');
    });
  });
};


