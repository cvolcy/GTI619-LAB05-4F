const mongoose = require('mongoose');

let roleSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

roleSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

mongoose.model('Role', roleSchema);