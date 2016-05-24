var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true   //this is cool
  },

  meals: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('users', UserSchema);