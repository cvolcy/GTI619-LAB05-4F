const express = require('express');

module.exports = function(passport) {

let router = express.Router();

  router.get("/signin", (req, res, next) => {
    res.render('signin');
  });

  router.post('/signin', passport.authenticate('local', {
  	successRedirect : '/repertoire/residentiel', //pour tester
    failureRedirect : '/auth/signin'
  }));

  router.get("/signup", (req, res, next) => {
    res.render('signup');
  });

  router.post("/signup", (req, res, next) => {
    res.send('/signup [POST]');
  });

  router.get("/signout", (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  });

  return router;

}