const express = require('express'),
      mongoose = require('mongoose');

module.exports = (app) => {
  let router = express.Router();

  let Role = mongoose.model('Role');
  let roles = [];
  Role.find().then((docs) => {
    roles = docs;
  });

  router.get("/residentiel", app.locals.authorizeFor("administrateur", "prep_residentiel"), (req, res, next) => {
    let User = mongoose.model("User");
    let role = roles.find((r) => r.name == "client_residentiel");
    User.find({ role: role.id }).populate(['role','info']).then((users) =>{
      res.render('repertoire', { title: "Repertoire de clients résidentiels", clients: users });
    });
  });

  router.get("/affaire", app.locals.authorizeFor("administrateur", "prep_affaire"), (req, res, next) => {
    let User = mongoose.model("User");
    let role = roles.find((r) => r.name == "client_daffaire");
    User.find({ role: role.id }).populate(['role','info']).then((users) =>{
      res.render('repertoire', { title: "Repertoire de clients d'affaire", clients: users });
    });
  });


  return router;
}
