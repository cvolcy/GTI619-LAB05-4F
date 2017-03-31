const express = require('express'),
      mongoose = require('mongoose');

let router = express.Router();

router.get("/", (req, res, next) => {
  res.render('security');
});

router.post("/setting", (req, res, next) => {
  res.send('/secutity [POST]');
});

module.exports = router;
