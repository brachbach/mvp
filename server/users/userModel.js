const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true 
  },

  vegBucks: {
    type: Number,
    default: 10
  },

  animals: {
    cows: {
      type: Number,
      default: 0
    }
  }
});

module.exports = mongoose.model('users', UserSchema);