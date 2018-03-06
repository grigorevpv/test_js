var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    console.log(req.query.data);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/searchProvider.xml', function (req, res) {
  console.log(req.query.data);
  res.sendFile(path.join(__dirname + '/searchProvider.xml'));
});

app.get('/searchProviderMail.xml', function (req, res) {
  console.log(req.query.data);
  res.sendFile(path.join(__dirname + '/searchProviderMail.xml'));
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 5000!');
});