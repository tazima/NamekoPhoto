var should = require('should'),
    // mongoose = require('mongoose'),
    Photo = require('../models/photo'),
    config = require('config'),
    conf = config.server;

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

      photo.path.should.be.equal(conf.blob_dir + photo.id);
    });
  });
});

