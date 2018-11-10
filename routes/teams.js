var express = require('express');
var router = express.Router();
var db = require('../queries');

router.get('/',function(req,res,next){
    console.log(db)
    db.findTeams(req,res)
    .then(query=>res.json(query))
    
})

router.post('/',function(req,res,next){
    db.createTeam(req)
    res.send('done')
})
module.exports = router;