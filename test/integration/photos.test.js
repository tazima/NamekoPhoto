var request = require('supertest'),
    app = require('../../app');

describe('/photos', function() {
  var requestPath = '/photos';

  describe('POST', function() {
    it('/photosへのPOSTで201が返却されること', function(done) {
      request(app)
        .post(requestPath)
        .expect(201, done);
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