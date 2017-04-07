/**
 * Created by jeanym on 2017-04-01.
 */
const express = require('express'),
      mongoose = require('mongoose');

module.exports = function(app) {
  let router = express.Router();

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  router.get('/', isLoggedIn, function(req, res) {
      res.render('profile.ejs');
  });

  router.post('/password', isLoggedIn, function(req, res) {
    let bcrypt = require('bcrypt');
    let User = mongoose.model("User");
    let Log = mongoose.model("Log");

    let oldPassword = req.body.password;
    let newPassword = req.body.password_new;
    let valPassword = req.body.password_val;

    User.findById(req.user.id).populate('passwordHistory').then((user) => {
      if (!req.user.isPasswordValid(oldPassword)) {
        req.flash('message', { text: 'Incorrect password.', type: 'danger' });
        new Log({
          message: `Try to update password failed due to bad password`,
          user: user,
          ip: req.ip,
          user_agent: req.headers['user-agent']
        }).save();
      } else if (valPassword !== newPassword) {
        req.flash('message', { 
          text: 'The new password and validation password doesnt match.',
          type: 'warning'
        });
      } else {
        let passExist = user.passwordHistory.find(function(value){
          return bcrypt.compareSync(newPassword, value.password);
        }) && user.passwordHistory.length;

        if(!passExist && oldPassword != newPassword) {
          user.password = user.hashPassword(newPassword);
          user.save().catch((err) => {
          });
          req.flash('message', { 
            text: 'Success! Your password has been changed.',
            type: 'success'
          });
          new Log({
            message: `Password updated`,
            user: user,
            ip: req.ip,
            user_agent: req.headers['user-agent']
          }).save();
        } else {
          req.flash('message', { 
            text: 'Your new password must not be the same as one of your old passwords.', 
            type: 'danger'
          });
          new Log({
            message: `Try to update password with old password.`,
            user: user,
            ip: req.ip,
            user_agent: req.headers['user-agent']
          }).save();
        }
      }
      res.redirect('/profile');
    })
  });

  router.post('/email', isLoggedIn, function(req, res) {
    res.send("email");
  });

  return router;
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated() && req.session.twoFactorAuth == true)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
