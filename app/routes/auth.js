const express = require('express'),
      passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      mongoose = require('mongoose');

let router = express.Router();

router.get("/signin", (req, res, next) => {
  res.render('signin');
});

// used to serialize the user
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  let User = mongoose.model("User");
  User.findById(id, function(err, user) {
      done(err, user);
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
    let users = mongoose.model("User");
    users.find().byName(username).then(function(user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.isPasswordValid(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
    // var User = mongoose.model('User');
    // var user = new User({ username : username, password : password})
    // return done(null, user);
  }
));

router.post('/signin', passport.authenticate('local', {
	successRedirect : '/repertoire/residentiel', //pour tester
  failureRedirect : '/auth/signin'
}));

module.exports = router;
