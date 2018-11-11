require('dotenv').config()

var pgp = require('pg-promise')({})
var connectionString = process.env['DATABASE_URL']
var db = pgp(connectionString)
var GeoPoint = require('geopoint');
async function findTeams(req,res,next){
    let queries = req.query
    let budget = parseFloat(queries.price)
    let latitude = parseFloat(queries.latitude)
    let longitude = parseFloat(queries.longitude)
    let radius = parseInt(queries.radius)
    console.log([latitude,longitude,radius])
    let location = new GeoPoint(latitude,longitude)
    let outerbounds = location.boundingCoordinates(radius)
    let upperlat = outerbounds[0]._degLat
    let upperlon = outerbounds[0]._degLon
    let lowerlat = outerbounds[1]._degLat
    let lowerlon = outerbounds[1]._degLon
    console.log([lowerlat,lowerlon,upperlat,upperlon])
    return await db.any("SELECT * FROM teams WHERE (latitude BETWEEN $1 AND $2) AND (longitude BETWEEN $3 AND $4);",[upperlat,lowerlat,upperlon,lowerlon])
    .then((teams)=>{
        let sponsorship = {
            teams: [],
            cost: 0,
        }
        let spend = budget
        let length = teams.length
        let comparePrice = (a,b)=> parseInt(a.price) - parseInt(b.price)
        teams = teams.sort(comparePrice)
        for(let i=0;i<length;i++){
            let price = parseInt(teams[i].price)
            if(price<spend){
                sponsorship.teams.push(teams[i])
                spend = spend - price
            }else{
                sponsorship.cost = budget - spend
            }
        }
        return sponsorship
    })
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