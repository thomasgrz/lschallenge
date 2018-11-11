
var pgp = require('pg-promise')({})
var connectionString = 'postgres://localhost:5432/my_new_database'
var db = pgp(connectionString)
var GeoPoint = require('geopoint');

async function findTeams(req,res,next){
    let queries = req.query
    let lat = parseFloat(queries.lat)
    let long = parseFloat(queries.long)
    let radius = parseInt(queries.radius)

    let location = new GeoPoint(lat,long)
    let outerbounds = location.boundingCoordinates(radius)
    let lat1 = outerbounds[0]._degLat
    let long1 = outerbounds[0]._degLon
    let lat2 = outerbounds[1]._degLat
    let long2 = outerbounds[1]._degLon
    return await db.one("SELECT * FROM users WHERE name=$1",[req.query.name] )
    .then(()=>location)
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