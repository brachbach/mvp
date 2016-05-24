const express = require ('express');
const mongoose = require('mongoose');
const userController = require('./users/userController.js')
const bodyParser = require('body-parser');
const helpers = require('./config/helpers.js');

mongoose.connect('mongodb://localhost/farmSanctuary');

const app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/api/auth/signup', userController.signup);
app.post('/api/auth/signin', userController.signin);

app.use('/api/user', helpers.decode);

app.get('/api/user', userController.getUser);

app.post('/api/user/meals', userController.addMeals);
app.post('/api/user/animals', userController.rescueAnimal);

app.listen(1337);