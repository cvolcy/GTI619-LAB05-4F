const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt');

let userSchema = new mongoose.Schema({
  username: { type : String, unique : true, required : true },
  password: { type : String, required : true }, //hash created from password
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now},
});

userSchema.methods.hashPassword = (password) => {
  let salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

userSchema.methods.isPasswordValid = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

userSchema.query.byName = function(username) {
  return this.findOne({ username: new RegExp(username, 'i') });
};

mongoose.model('User', userSchema);
