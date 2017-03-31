const express = require('express'),
      mongoose = require('mongoose');

let router = express.Router();

router.get("/", (req, res, next) => {
  let Setting = mongoose.model("SecuritySettings");

  Setting.findOne({}).then((result) => {
    res.render('security', { passwordRules: result.passwordRules, passwordChange: result.passwordChange, bruteforce: result.bruteforce });
  }).catch((err) => {
    res.render('test', { result: JSON.stringify(err) });
  });
});

router.post("/setting", (req, res, next) => {
  res.render('test', { result: JSON.stringify(req.body, null, 2)});
});

module.exports = router;
