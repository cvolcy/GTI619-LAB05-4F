const mongoose = require('mongoose');

let logSchema = new mongoose.Schema({
  message: { type: String, required : true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ip: { type: String },
  user_agent: { type: String },
  created_at: { type: Date, default: Date.now },
});

logSchema.pre('save', function(next) {
  next();
});

mongoose.model('Log', logSchema);