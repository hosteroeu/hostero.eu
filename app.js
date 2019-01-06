var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express();
var port = 80;

app.engine('html', mustacheExpress());

app.use('/webdollar', express.static('webdollar'));
app.use('/assets', express.static('assets'));

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Run your Miners, easy as &pi;',
    message: 'Hello there!'
  });
});

app.get('/getting-started', function(req, res) {
  res.render('getting-started', {
    title: 'Getting Started',
    message: 'Hello there!'
  });
});

app.get('/changelog', function(req, res) {
  res.render('changelog', {
    title: 'Changelog',
    message: 'Hello there!'
  });
});

app.get('/purchase-webdollar', function(req, res) {
  res.render('purchase-webdollar', {
    title: 'Purchase WebDollar',
    message: 'Hello there!'
  });
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});
