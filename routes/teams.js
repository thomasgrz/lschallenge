var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/',function(req,res,next){
    db.findTeams(req,res)
    .then(query=>res.json(query))
    
})

module.exports = router;