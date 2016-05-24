var User = require('./userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

var createUser = Q.nbind(User.create, User);
var findUser = Q.nbind(User.findOne, User);

module.exports = {
  signup: function(req, res) {
    var username = req.body.username;
    console.log('creating user');
    return createUser({
      username: username
    })
    .then (function(user) {
      var token = jwt.encode(user, 'secret');
      res.json({token: token});
    });
  },
  signin: function(req, res) {
    findUser({username: req.body.username})
      .then (function(user) {
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
    });
  },
  getMeals: function(req, res) {
    findUser({username: req.user.username})
      .then(function(user) {
        console.log(user.meals);
        res.json({meals: user.meals});
      })
  },
  addMeals: function(req, res) {
    findUser({username: req.user.username})
      .then(function(user) {
        // console.log(user.meals);
        user.meals = user.meals + req.body.meals;
        user.save(function(err, savedUser){
          res.send('Meals stored!');
        });
      });
  }
}