# SportSponsor
Simple coding challenge for technical review. 
It has two endpoints:
1. One to POST new Leagues to
2. One to GET Leagues in need of sponsorship from

## Connect your local database
SportSponsor requires a local PostgresQL database named `teams` to store and query data from.

Navigate to the .env file in the root directory and change the DATABASE_URL like so:
```
DATABASE_URL=postgres://localhost:<YOUR_PSQL_PORT>/<YOUR_PSQL_DATABASE>
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
export DATABASE_URL=DATABASE_URL=postgres://localhost:<YOUR_PSQL_PORT>/<YOUR_PSQL_DATABASE>
```
Once you've filled in `teams.csv` with enough teams' info, you can use it to populate the PostgresQL database.



```
python seed.py
```