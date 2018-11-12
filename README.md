# SportSponsor
Simple coding challenge for technical review. 
It has two endpoints:
1. `/team`

The `/team` route accepts POST requests and expects, within the body, a latitude=(*lat. in decimals*), longitude=(*long. in decimals*), name=(*string*) and price=(*USD as integer*). 
This route will return an object representing the newly created database entry

```
{
  name: "The Job Hunt Jaguars",
  latitude: "30.1234",
  longitude: "-75.1234",
  price: "500"
}
```
2. `/teams`

The `/teams` route accepts GET requests and expects, within the query parameters of the URL a latitude=(*lat. in decimals*), longitude=(*long. in decimals*), radius=(*miles as integer*) and price=(*USD as integer*).
This route will query the teams within the PostgresQL database and return an object representing as many teams as possible within the given radius of the specificed location without going over budget as well as the total cost.

example:


## Connect your local database
SportSponsor requires a local PostgresQL database with a table named `teams` to store and query data from.

Navigate to the .env file in the root directory and change the DATABASE_URL like so:
```
DATABASE_URL=postgres://localhost:<YOUR_PSQL_PORT>/<YOUR_DATABASE>
```

## Test out the web service
First install the node dependencies
```
  npm install
```
Then run the following command in the root directory
```
  npm start
```
Then navigate to `localhost:3000` in a web browser to interact with the web application 



## Populate your database with teams to test the application
You can populate your SportSponsor database one entry at a time using the web application itself or you can populate it with values from the `teams.csv` file in the root directory using `seed.py`.

`seed.py` assumes you have a DATABASE_URL environment variable. Be sure to set it like so:

```
export DATABASE_URL=DATABASE_URL=postgres://localhost:<YOUR_PSQL_PORT>/<YOUR_DATABASE>
```
Once you've filled in `teams.csv` with enough teams' info, you can use it to populate the PostgresQL database.



```
python seed.py
```