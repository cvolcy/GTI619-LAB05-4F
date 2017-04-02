const express = require('express'),
      mongoose = require('mongoose');

module.exports = (app) => {
  let router = express.Router();

  router.get("/residentiel", app.locals.authorizeFor("administrateur", "prep_residentiel"), (req, res, next) => {
    let User = mongoose.model("User");
    User.find({}).populate(['role','info']).then((users) =>{
      let usersRes = users.filter((user) =>{
        return user.role.name == "client_residentiel" ? user.role.name : null;
      });
      res.render('repertoire', { title: "Repertoire de clients résidentiels", clients: usersRes});
    });
  });

  router.get("/affaire", app.locals.authorizeFor("administrateur", "prep_affaire"), (req, res, next) => {
    let User = mongoose.model("User");
    User.find({}).populate(['role','info']).then((users) =>{
      let usersAff = users.filter((user) =>{
        return user.role.name == "client_daffaire" ? user.role.name : null;
      });
      res.render('repertoire', { title: "Repertoire de clients d'affaire", clients: usersAff});
    });
  });


  return router;
}
