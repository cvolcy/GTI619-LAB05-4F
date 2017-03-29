const mongoose = require('mongoose');

let securitySchema = new mongoose.Schema({
  bruteforce: {
    maxAttempt: { type: Number, default: null },
    delay: { type: Number, default: null },
    blockAccess: { type: Boolean, default: false }
  },
  passwordChange: {
    onBruteForceMaxAttempt: { type: Boolean, default: false },
    forgetPassword: { type: Boolean, default: false },
    strongAuthentication: { type: Boolean, default: false },
    renewalDelay: { type: Number, default: null }
  },
  passwordRules: {
    minlength: { type: Number, default: null },
    maxlength: { type: Number, default: null },
    upperlowercase: { type: Boolean, default: false },
    number: { type: Boolean, default: false },
    specialChar: { type: Boolean, default: false }
  }
});

securitySchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

mongoose.model('SecuritySettings', securitySchema);
