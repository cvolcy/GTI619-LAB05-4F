const express = require('express'),
      mongoose = require('mongoose');

module.exports = function(passport, app) {

let router = express.Router();
  router.get("/signin", (req, res, next) => {
    res.render('signin');
  });
passport.all
  router.post('/signin', passport.authenticate('local', {
  	successRedirect : '/auth/grid', //pour tester
    failureRedirect : '/auth/signin',
    failureFlash : true
  }));

  router.get("/signup", (req, res, next) => {
    let Settings = mongoose.model("SecuritySettings");
    let Role = mongoose.model("Role");
    Settings.findOne().then((settings) => {
      Role.find().then((result) => {
        result.forEach((element) =>{
          console.log(element.name);
        });
        res.render('signup', { passRules: settings.passwordRules , roles: result });
      });
    }).catch((err) => {
      res.render('index', { result: JSON.stringify(err) });
    });
  });

  router.post("/signup", (req, res, next) => {
    let User = mongoose.model("User");
    let Info = mongoose.model("Info");
    let newUser = new User();
    let newInfo = new Info();
    newInfo.name = req.body.name;
    newInfo.email = req.body.email;
    newInfo.phone = req.body.phone;
    newInfo.street = req.body.street;
    newInfo.city = req.body.city;
    newInfo.state = req.body.state;
    newInfo.postal_code = req.body.postal_code;
    newUser.username = req.body.username;
    newUser.password = newUser.hashPassword(req.body.password);
    newUser.role = req.body.role_id;
    newUser.info = newInfo;
    newInfo.save().then((info) => {
      console.log(info);
      newUser.save().then((user) => {
        console.log(user);
        User.findById(user.id).populate('card').then((result) => {
          res.render('grid', {
            title: 'Grid Card | 2 Factor Auth | Show Grid Card',
            gridCard: result.card.getDecryptedCard(),
            showGrid: 'true'
          });
        })
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  });

  router.get("/signout", (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  });

  router.get('/grid', (req, res, next) => {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/signin');
    }
    let questions = [];
    let challenge = []
    let keys = Object.keys(req.user.card.getDecryptedCard());
    for (var i = 0; i < 3; i++) {
      let key = keys[Math.floor(Math.random() * keys.length)];
      let index = Math.floor(Math.random()*5);
      challenge.push([key, index]);
      questions.push(""+ key + (index + 1));
    }

    req.session.challenge = challenge;

    res.render('grid', {
      title: 'Grid Card | 2 Factor Auth',
      gridCard: req.user.card.getDecryptedCard(),
      questions: questions,
      showGrid: req.query.showGrid
    });
  });

  router.post('/grid', (req, res, next) => {
    if (!req.isAuthenticated()) {
      res.redirect('/auth/signin');
    }

    // let gridCard = req.user.card.getDecryptedCard();
    // let anwsers = req.body.anwsers.map((a) => a.toLowerCase());
    // for (var i = 0; i < req.session.challenge.length; i++) {
    //   let key = req.session.challenge[i][0];
    //   let index = req.session.challenge[i][1];
    //
    //   if (anwsers.indexOf(gridCard[key][index]) === -1) {
    //     return res.redirect('/auth/grid');
    //   }
    // }
    req.session.twoFactorAuth = true;
    return res.redirect('/auth/renewal');
  });

  router.get('/renewal', (req, res, next) => {
    let User = mongoose.model("User");
    let SecuritySettings = mongoose.model("SecuritySettings");
    User.findById(req.user.id).populate('passwordHistory').then((user) => {
      let passwordHistory = user.passwordHistory[user.passwordHistory.length - 1];
      let lastUpdate;
      if (passwordHistory) {
        lastUpdate = passwordHistory.updated_at;
      } else {
        lastUpdate = user.created_at;
      }
      let diff = Date.now() - new Date(lastUpdate);
      SecuritySettings.findOne().then((result) => {
        if (diff > result.passwordChange.renewalDelay && result.passwordChange.renewalDelay != 0) {
          req.flash('renewalMessage','your password has expired!' );
          return res.redirect('/profile/');
        } else {
          return res.redirect('/');
        }
      });
    });
  });

  return router;

}
