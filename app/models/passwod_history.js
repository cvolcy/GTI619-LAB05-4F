const mongoose = require('mongoose');

let PasswordHistory = new mongoose.Schema({
  password: { type : String, required : true },
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
});

PasswordHistory.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

mongoose.model('PasswordHistory', PasswordHistory);
