var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    console.log('connection start');
    res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});