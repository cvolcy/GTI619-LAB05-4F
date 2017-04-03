const LocalStrategy = require('passport-local').Strategy,
      mongoose = require('mongoose');

module.exports = function(passport, app) {
  app.use(function(req, res, next) {
    let SecuritySettings = mongoose.model("SecuritySettings");
    SecuritySettings.findOne({}).then((settings) => {
      req.session.cookie.maxAge = 1000 * 60 * settings.session.maxAge; // value dans le security settings
    });

    // Pour avoir accès à ces variables dans les vues.

    app.locals.isAuthenticated = req.isAuthenticated() && req.session.twoFactorAuth == true;
    app.locals.user = req.user;
    app.locals.role = req.isAuthenticated() ? req.user.role.name : null;
    // Accessible avec "req.app.checkRole('foo')"
    app.locals.checkRole = (...rolesToCheck) => {
      if (app.locals.isAuthenticated) {
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
    User.findById(id).populate(['role', 'card']).then((user) => {
        done(null, user);
    }).catch((err) => {
      done(err);
    });
  });

  passport.use('local', new LocalStrategy({ passReqToCallback: true },function(req, username, password, done) {
    let User = mongoose.model("User");
    let Log = mongoose.model("Log");
    User.findOne().byUsername(username).populate(['role', 'card']).then(function(user) {
      if (!user) {
        new Log({
          message: `Try to sign in with incorrect username : '${username}'`,
          ip: req.ip,
          user_agent: req.headers['user-agent']
        }).save();
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.isPasswordValid(password)) {
        new Log({
          message: `Try to sign in with incorrect password for user '${username}'`,
          user: user,
          ip: req.ip,
          user_agent: req.headers['user-agent']
        }).save();
        return done(null, false, { message: 'Incorrect password.' });
      }
      new Log({
        message: `Successfully sign in with user '${username}'`,
        user: user,
        ip: req.ip,
        user_agent: req.headers['user-agent']
      }).save();
      return done(null, user);
    });
  }));
}