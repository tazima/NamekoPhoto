/**
 * Module dependencies.
 */

var express = require('express'),
  config = require('config'),
  conf = config.server,
  resource = require('express-resource'),
  mongoose = require('mongoose'),
  models = require('./models'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

// all environments
app.set('port', conf.port);
app.set('host', conf.host);

app.set('connstring', 'mongodb://nodejitsu:db9b7febd39c070efe9bab24f52970d6@linus.mongohq.com:10069/nodejitsudb2763706098');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.set('connstring', 'mongodb://' + conf.mongo.host + '/' + conf.mongo.db_name);
}

//configure mongoose models
models.defineModels(mongoose, conf, function() {
  app.Photo = Photo = mongoose.model('Photo');
  db = mongoose.connect(app.set('connstring'));
});

// routing
app.resource('/', require('./routes/index'));
app.resource('photos', require('./routes/photos'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
