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
      res.render('profile.ejs', {
          user : req.user // get the user out of session and pass to template
      });
  });

  router.post('/password', isLoggedIn, function(req, res) {
    let bcrypt = require('bcrypt');
    let User = mongoose.model("User");
    var uPass = req.user.password;
    var oldPassword = req.body.password;
    var newPassword = req.body.password_new;
    var valPassword = req.body.password_val;
    let isPasswordValid = bcrypt.compareSync(oldPassword, uPass);

    User.findById(req.user.id).populate('passwordHistory').then((user) => {
      if (!isPasswordValid) {
        var msg = 'Incorrect password.';
      } else if (valPassword !== newPassword) {
        var msg = 'The new password and validation password doesnt match.';
      } else {
        let passExist = false;
        user.passwordHistory.every(function(value){
          if(bcrypt.compareSync(newPassword, value.password)) {
            passExist = true;
            return false;
          } else {
            return true;
          }
        });
        if(!passExist && oldPassword != newPassword) {
          user.password = user.hashPassword(newPassword);
          user.save().then((user) => {
            console.log(user.id);
          }).catch((err) => {
            console.log(err);
          });
          var msg = 'Success! Your password has been changed.';
        } else {
          var msg = 'Your new password must not be the same as one of your old passwords..';
        }
        console.log(msg);
        res.redirect('/profile');
      }
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
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
