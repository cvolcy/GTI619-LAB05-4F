const express = require('express'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      mongoose = require('mongoose');

let router = express.Router();

// used to serialize the user
passport.serializeUser(function(user, done) {
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  let User = mongoose.model("User");
  User.findById(id, function(err, user) {
      done(err, user);
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
    let User = mongoose.model("User");
    User.findOne().byName(username).then(function(user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.isPasswordValid(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

router.post('/signin', passport.authenticate('local', {
	successRedirect : '/repertoire/residentiel', //pour tester
  failureRedirect : '/auth/signin'
}));

module.exports = router;
