var User = require('./userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

var createUser = Q.nbind(User.create, User);

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
  }
}