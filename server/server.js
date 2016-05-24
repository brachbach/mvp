var express = require ('express');
var mongoose = require('mongoose');
var userController = require('./users/userController.js')
var bodyParser = require('body-parser');
var helpers = require('./config/helpers.js');

mongoose.connect('mongodb://localhost/farmSanctuary');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/users/signup', userController.signup);

app.use('/api/meals', helpers.decode);
app.get('/api/meals/', userController.getMeals);
app.post('/api/meals/', userController.addMeals);

app.listen(1337);