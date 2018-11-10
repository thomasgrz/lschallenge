
var pgp = require('pg-promise')({})
var connectionString = 'postgres://localhost:5432/my_new_database'
var db = pgp(connectionString)

async function findTeams(req,res,next){
    return await db.one("SELECT * FROM users WHERE name=$1",[req.query.name] )
    .then(data=>JSON.stringify(data) + req.query.othername)
    .catch(err=>console.error(err))
}

async function createTeam(req,res){
    let teamname = req.query.name
    let teamprice = req.query.price
    let longitude = parseFloat(req.query.longitude)
    let latitude = parseFloat(req.query.latitude)

    return await db.none("INSERT INTO teams(name, location, price) VALUES ($1,'($2,$3)',$4)",[teamname, longitude,latitude, teamprice])
    .then((name)=>console.log(name))
    .catch(err=>console.error(err))
}
module.exports = {
    findTeams: findTeams,
    createTeam: createTeam,
}