var request = require('supertest'),
    app = require('../../app');

describe('/user', function() {
  var requestPath = '/user';

  describe('POST', function() {
    it('/userへのPOSTで302が返却されること', function(done) {
      request(app)
        .post(requestPath)
        .send({ name: 'たま', email: 'tama@example.com', password: 'hehehe' })
        .expect(302, done)
        .expect('location', '/photos');
    });
  });
});