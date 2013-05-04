var should = require('should'),
    mongoose = require('mongoose'),
    models = require('../models'),
    Photo;

var conf = {"blob_dir" : "/blob/"};

models.defineModels(mongoose, conf, function() {
  Photo = mongoose.model('Photo');
});

describe('PhotoModel', function() {
  describe('インスタンス生成', function() {
    it('指定した属性でインスタンスが生成できること', function() {
      var photo = new Photo({
        name: 'ななめこ'
      });

      photo.id.should.not.be.equal(null);
      photo.id.length.should.not.be.equal(0);

      photo.name.should.be.equal('ななめこ');

      photo.published_date.should.not.be.equal(null);
      photo.published_date.length.should.not.be.equal(0);

      photo.path.should.be.equal('/blob/' + photo.id);
    });
  });
});

