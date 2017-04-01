const LocalStrategy = require('passport-local').Strategy,
      mongoose = require('mongoose');

module.exports = function(passport, app) {
  app.use(function(req, res, next) {
    let SecuritySettings = mongoose.model("SecuritySettings");
    SecuritySettings.findOne({}).then((settings) => {
      req.session.cookie.maxAge = 1000 * 60 * settings.session.maxAge; // value dans le security settings
    });

    // Pour avoir accès à ces variables dans les vues.

    app.locals.isAuthenticated = req.isAuthenticated();
    app.locals.user = req.user;
    app.locals.role = req.isAuthenticated() ? req.user.role.name : null;
    // Accessible avec "req.app.checkRole('foo')"
    app.locals.checkRole = (...rolesToCheck) => {
      if (req.isAuthenticated()) {
        return rolesToCheck.includes(req.user.role.name);
      }
      return false;
    }

    next();
  });

  // Use as middleware
  // ex. : app.get('/', app.locals.authorizeFor('role'), funct...
  app.locals.authorizeFor = (...rolesToCheck) => {
    // function generator
    return (req, res, next) => {
      if (req.app.locals.checkRole(...rolesToCheck)) {
        return next();
      }
      res.redirect('/');
    }
  }

  // used to serialize the user
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    let User = mongoose.model("User");
    User.findById(id).populate('role').then((user) => {
        done(null, user);
    }).catch((err) => {
      done(err);
    });
  });

  passport.use('local', new LocalStrategy(function(username, password, done) {
    let User = mongoose.model("User");
    User.findOne().byUsername(username).then(function(user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.isPasswordValid(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    });
  }));
}