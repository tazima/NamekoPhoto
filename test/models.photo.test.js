var should = require('should'),
    Photo = require('../models/photo'),
    User = require('../models/user'),
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

    it('ユーザを指定してインスタンスが生成できること', function() {
      var tama = new User({
        name: 'たま',
        email: 'pochi@example.com',
        password: '!23$59ewwapoiu!23$59ewwapoiu!23$59ewwapoiu'
      });
      var photo = new Photo({
        name: 'ななめこ',
        user: tama.id
      });

      photo.id.should.not.be.equal(null);
      photo.id.length.should.not.be.equal(0);

      photo.name.should.be.equal('ななめこ');

      photo.published_date.should.not.be.equal(null);
      photo.published_date.length.should.not.be.equal(0);

      photo.path.should.be.equal(conf.blob_dir + photo.id);

      photo.user.should.be.equal(tama.id);
    });
  });
});

