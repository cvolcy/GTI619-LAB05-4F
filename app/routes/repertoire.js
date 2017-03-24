const express = require('express'),
      mongoose = require('mongoose');

let router = express.Router();

router.get("/residentiel", (req, res, next) => {
  let User = mongoose.model("User");
  res.send('/Ceci est le repertoire de clients de type [residentiel]');
});

router.get("/affaire", (req, res, next) => {
  let User = mongoose.model("User");
  res.send('/Ceci est le repertoire de clients de type [affaire]');
});

module.exports = router;
