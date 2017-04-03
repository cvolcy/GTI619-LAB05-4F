const express = require('express'),
      mongoose = require('mongoose');

module.exports = (app) => {
  let router = express.Router();

  router.get("/", app.locals.authorizeFor("administrateur"), (req, res, next) => {
    let SecuritySettings = mongoose.model("SecuritySettings");

    SecuritySettings.findOne({}).then((result) => {
      res.render('security', { 
        passwordRules: result.passwordRules,
        passwordChange: result.passwordChange,
        bruteforce: result.bruteforce,
        session: result.session
      });
    }).catch((err) => {
      res.render('index', { result: JSON.stringify(err) });
    });
  });

  router.post("/setting", app.locals.authorizeFor("administrateur"), (req, res, next) => {
    let SecuritySettings = mongoose.model("SecuritySettings");
    SecuritySettings.findOne({}).then((setting) => {
      setting.bruteforce.maxAttempt = req.body.maxAttempt;
      setting.bruteforce.delay = req.body.delay;
      setting.bruteforce.blockAccess = req.body.blockAccess;
      setting.passwordChange.onBruteForceMaxAttempt = req.body.onBruteForceMaxAttempt;
      setting.passwordChange.forgetPassword = req.body.forgetPassword;
      setting.passwordChange.strongAuthentication = req.body.strongAuthentication;
      setting.passwordChange.renewalDelay = req.body.renewalDelay;
      setting.passwordRules.minlength = req.body.minlength;
      setting.passwordRules.maxlength = req.body.maxlength;
      setting.passwordRules.upperlowercase = req.body.upperlowercase;
      setting.passwordRules.number = req.body.number;
      setting.passwordRules.specialChar = req.body.specialChar;
      setting.session.maxAge = req.body.maxAge;
      setting.save().then((setting) => {
        let Log = mongoose.model("Log");
        new Log({
          message: `Security settings updated`,
          user: req.user,
          ip: req.ip,
          user_agent: req.headers['user-agent']
        }).save();

        res.redirect('/security');
      }).catch((err) => {
        res.redirect('security', { result: JSON.stringify(err) });
      });
    }).catch((err) => {
      res.render('index', { result: JSON.stringify(err) });
    });
  });

  return router;
}
