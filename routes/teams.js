var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8000/myfirstmdb"

MongoClient.connect(url,function(err, db){
    if(err) throw err;
    console.log("Database created!")
    db.close()
})
router.get('/',function(req,res,next){
    let query = req.query
    res.json(query)
})

router.post('/',function(req,res,next){
    console.log(req.query)
    res.send(req.query)
})
module.exports = router;