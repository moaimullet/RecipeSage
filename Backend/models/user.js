var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  name: {
      type: String
  },
  email: {
      type: String
  },
  password: {
      type: String
  },
  salt: {
      type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', User);
