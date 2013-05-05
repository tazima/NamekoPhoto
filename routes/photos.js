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
        res.status(201).send();
      });
    });
  });
};

/*
 * list photos.
 */
exports.index = function(req, res){
  // TODO get list of photos from db.

  // TODO create response.
  res.render('photos', { title: 'NamekoPhoto' });
};

