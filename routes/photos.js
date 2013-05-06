/*
 * photos resource.
 */

var fs = require('fs'),
    Photo = require("../models/photo");

/*
 * save a photo.
 */
exports.create = function(req, res){

  // TODO validate.

  var reqFile = req.files.file;

  // save a photo to db.
  var photo = new Photo();
  photo.name = reqFile.name;

  photo.save(function(err) {
    if(err) throw err;

    // save binary data.
    var tmp_path = reqFile.path;
    var target_path = photo.path;
    fs.rename(tmp_path, target_path, function(err) {
      console.log(err);
      if (err) throw err;

      // delete temporary file.
      fs.unlink(tmp_path, function() {
        if (err) throw err;
        res.redirect('/photos');
      });
    });
  });
};

/*
 * list photos.
 */
exports.index = function(req, res){

  // get list of photos from db.
  Photo.find(function(err, photos) {
    var files = new Array();
    photos.forEach(function(photo) {
      files.push({name: photo.name, path: photo.path.substring('/public/'.length + 1)});
    });
    res.render('photos', { 
      title: 'NamekoPhoto', 
      files: files });
  });
};

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

