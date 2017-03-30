const express = require('express'),
      mongoose = require('mongoose');

module.exports = (app) => {

  let router = express.Router();

  router.get("/", (req, res, next) => {
    let users = mongoose.model("User");
    users.find({}).populate('role').then((result) => {
      res.render('index', { result: JSON.stringify(result, null, 2) });
    }).catch((err) => {
      res.render('index', { result: JSON.stringify(err) });
    });
  });
  
  return router;
}
