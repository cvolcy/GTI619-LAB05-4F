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


            var uId = req.user.id;
            var uPass = req.user.password;
            var oldPassword = req.body.password;
            var newPassword = req.body.password_new;
            var valPassword = req.body.password_val;
            var bcrypt = require('bcrypt');

            //bcrypt.compareSync(oldPassword, hashnew); // true
            //bcrypt.compareSync("not my password", hashnew); // false
console.log(oldPassword);
                        if (!bcrypt.compareSync(oldPassword, uPass)) {
                            var message = {
                                message: 'Incorrect password.'
                            };
                        }else if (valPassword !== newPassword){
                            var message = {
                                message: 'The new password and validation password doesnt match.'
                            };

                        }else{
                            var countSame = 0;
                            req.user.passwordHistory.forEach(function(value){
                                if(bcrypt.compareSync(oldPassword, value)  || bcrypt.compareSync(value, uPass)) {
                                    countSame += 1;
                                }
                            });
                            if(countSame == 0){
                                req.user.password = newPassword;
                                /*                            user.save(function(err) {
                                 req.logIn(user, function(err) {
                                 done(err, user);
                                 });
                                 });*/

                                var message = {
                                    message: 'Success! Your password has been changed.'
                                };

                            }else{

                                var message = {
                                    message: 'Your new password must not be the same as one of your old passwords..'
                                };
                            }
                            res.send( message);
                        }
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