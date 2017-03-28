var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose');

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

passport.use('signin', new LocalStrategy(function(username, password, done) {
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
  }
));
