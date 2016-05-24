const User = require('./userModel.js');
const Q = require('q');
const jwt = require('jwt-simple');

const createUser = Q.nbind(User.create, User);
const findUser = Q.nbind(User.findOne, User);

module.exports = {
  signup: (req, res) => {
    const username = req.body.username;
    return createUser({
      username: username
    })
    .then ((user) => {   //this might possibly be better as a redirect to sign in
      const token = jwt.encode(user, 'secret');
      res.json({token: token});
    });
  },

  signin: (req, res) => {
    findUser({username: req.body.username})
      .then ((user) => {
        const token = jwt.encode(user, 'secret');
        res.json({token: token});
    });
  },

  getUser: (req, res) => {
    findUser({username: req.user.username})
      .then((user) => {
          res.send(user);
      });
  },

  addMeals: (req, res) => {
    findUser({username: req.user.username})
      .then((user) => {
        // console.log(user.meals);
        user.vegBucks = user.vegBucks + req.body.meals;
        user.save((err, savedUser) => {
          res.send('Meals stored!');
        });
      });
  },

  rescueAnimal: (req, res) => {
    findUser({username: req.user.username})
      .then((user) => {
        user.vegBucks = user.vegBucks - req.body.fund;
        console.log(req.body.animal);
        console.log(user.animals[req.body.animal]);
        user.animals[req.body.animal]++;
        user.save((err, savedUser) => {
          res.send(savedUser);
        });
      });
  },
}