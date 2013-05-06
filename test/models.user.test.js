var should = require('should'),
    User = require('../models/user');

describe('UserModel', function() {
  describe('インスタンス生成', function() {
    it('指定した属性でインスタンスが生成できること', function() {
      var pochi = new User({
        name: 'ポチ',
        email: 'pochi@example.com',
        password: '!23$59ewwapoiu!23$59ewwapoiu!23$59ewwapoiu'
      });

      pochi.id.should.not.be.equal(null);
      pochi.id.length.should.not.be.equal(0);

      pochi.name.should.be.equal('ポチ');
      pochi.email.should.be.equal('pochi@example.com');
      pochi.password.should.be.equal('!23$59ewwapoiu!23$59ewwapoiu!23$59ewwapoiu');
    });

    it('emailの指定が無い場合ユーザの登録に失敗すること', function(done) {
      var pochi = new User({
        name: 'ポチ',
        password: '!23$59ewwapoiu!23$59ewwapoiu!23$59ewwapoiu'
      });

      pochi.id.should.not.be.equal(null);
      pochi.id.length.should.not.be.equal(0);

      pochi.name.should.be.equal('ポチ');
      pochi.password.should.be.equal('!23$59ewwapoiu!23$59ewwapoiu!23$59ewwapoiu');
      
      (function() {
        pochi.save(done);
      }).should.throw();
      // }).should.throw('ValidationError');

    });
  });
});

