var User = require('./userModel.js');
var Q = require('q');

var createUser = Q.nbind(User.create, User);

module.exports = {
  signup: function(req, res) {
    // console.log(req.body);
    var username = req.body.username;
    return createUser({
      username: username
    });
  }
}