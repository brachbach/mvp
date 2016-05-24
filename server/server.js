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

app.post('/api/auth/signup', userController.signup);
app.post('/api/auth/signin', userController.signin);

app.use('/api/user', helpers.decode);
app.get('/api/user/meals/', userController.getMeals);
app.post('/api/user/meals/', userController.addMeals);

app.listen(1337);