var express = require('express');
var router = express.Router();
var db = require('../queries');

router.post('/',function(req,res,next){
    db.createTeam(req)
    .then((createdTeam)=>res.json(createdTeam))
})

module.exports = router;