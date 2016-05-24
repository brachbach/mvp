var express = require ('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/farmSanctuary');

var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/api/meals', function(req, res) {
  res.send({meals: 5});
});

app.listen(1337);