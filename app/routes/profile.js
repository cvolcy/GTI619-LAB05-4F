/**
 * Created by jeanym on 2017-04-01.
 */
const express = require('express');

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
        res.send("password");
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