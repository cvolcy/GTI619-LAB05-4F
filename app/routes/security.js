const express = require('express'),
      mongoose = require('mongoose');

module.exports = (app) => {
  let router = express.Router();

  router.get("/", (req, res, next) => {
    let SecuritySettings = mongoose.model("SecuritySettings");

    SecuritySettings.findOne().then((settings) => {
      res.json(settings);
    });
  });

  return router;
}
