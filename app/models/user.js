const mongoose = require('mongoose'),
      bcrypt   = require('bcrypt');

let userSchema = new mongoose.Schema({
  username: { type : String, unique : true, required : true },
  block: {
    deepBlock: { type: Boolean, default: false },
    expire_at: { type: Date, default: null }
  },
  password: {
    type : String,
    set: function(newPass) {
      this._oldPassword = this.password;
      return newPass;
    }
  }, //hash created from password
  info: { type: mongoose.Schema.Types.ObjectId, ref: 'Info' },
  passwordHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PasswordHistory' }],
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  card: { type: mongoose.Schema.Types.ObjectId, ref: 'GridCard' },
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

  if ( this.isNew ) {
    let GridCard = mongoose.model("GridCard");
    let card = new GridCard();
    card.save().then((card) => {
      this.card = card;
      next();
    });
  } else {
    if (this.isModified("password")) {
      let PasswordHistory = mongoose.model("PasswordHistory");
      let newPassword = new PasswordHistory({ password: this._oldPassword })
      newPassword.save().then(() => {
        this.passwordHistory.push(newPassword);
        next();
      });
    } else {
      next();
    }
  }
});

userSchema.query.byUsername = function(username) {
  return this.findOne({ username: new RegExp(username, 'i') });
};

mongoose.model('User', userSchema);
