const express = require('express'),
      mongoose = require('mongoose');

module.exports = (app) => {
  let router = express.Router();

  router.get("/", (req, res, next) => {
    let SecuritySettings = mongoose.model("SecuritySettings");

    SecuritySettings.findOne({}).then((result) => {
        res.render('security', { passwordRules: result.passwordRules, passwordChange: result.passwordChange, bruteforce: result.bruteforce });
      }).catch((err) => {
        res.render('test', { result: JSON.stringify(err) });
      });
  });

  router.post("/setting", (req, res, next) => {
    res.send('/setting [POST]');
  });

  return router;
}
