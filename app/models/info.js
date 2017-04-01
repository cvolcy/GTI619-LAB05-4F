const mongoose = require('mongoose');

let infoSchema = new mongoose.Schema({
  name: { type : String, required : true },
  email: { type : String, required : true },
  phone: { type : String, required : true },
  street: { type : String, required : true },
  city: { type : String, required : true },
  state: { type : String, required : true },
  postal_code: { type : String, required : true },
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
});

infoSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

mongoose.model('Info', infoSchema);
