var request = require('supertest'),
    app = require('../../app');

describe('/photos', function() {
  var requestPath = '/photos';

  describe('POST', function() {
    it('/photosへのPOSTで302が返却されること', function(done) {
      request(app)
        .post(requestPath)
        .attach('file', 'test/resource/nanameko.jpg')
        .expect(302, done)
        .expect('location', '/photos');
    });
  });

  describe('GET', function() {
    it('/photosへのGETで200が返却されること', function(done) {
      request(app)
        .get(requestPath)
        .expect(200, done);
    });
  });

});