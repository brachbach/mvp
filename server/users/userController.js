var User = require('./userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

var createUser = Q.nbind(User.create, User);
var findUser = Q.nbind(User.findOne, User);

module.exports = {
  signup: function(req, res) {
    // console.log(req.body);
    var username = req.body.username;
    return createUser({
      username: username
    })
    .then (function(user) {
      var token = jwt.encode(user, 'secret');
      res.json({token: token});
    });
  },
  getMeals: function(req, res) {
    findUser({username: req.user.username})
      .then(function(user) {
        console.log(user.meals);
        res.send(user.meals);
      })
  },
  addMeals: function(req, res) {

  }
}