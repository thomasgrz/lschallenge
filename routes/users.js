var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This page isn\'t needed but I appreciate you checking on it anyway :)');
});

module.exports = router;
