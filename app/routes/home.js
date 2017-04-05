const express = require('express'),
      mongoose = require('mongoose');

module.exports = (app) => {

  let router = express.Router();

  router.get("/", (req, res, next) => {
    let users = mongoose.model("User");
    let Set = mongoose.model("SecuritySettings");
    users.find({}).populate(['role','card','info']).then((result) => {
      res.render('index', { result: JSON.stringify(result, null, 2) });
    }).catch((err) => {
      res.render('index', { result: JSON.stringify(err) });
    });
    // Set.findOne().then((result) => {
    //   res.render('index', { result: JSON.stringify(result, null, 2) });
    // }).catch((err) => {
    //   res.render('index', { result: JSON.stringify(err) });
    // });
  });

  return router;
}
