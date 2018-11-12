# SportSponsor
Simple coding challenge for technical review. 
It has two endpoints:
1. One to POST new Leagues to
2. One to GET Leagues in need of sponsorship from

## Connect your local database
SportSponsor requires a local PostgresQL database to store and query data from.

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
Then go to localhost:3000/ to interact with the web application 



### Populate your database with teams to test the application
You can populate your SportSponsor database one entry at a time using respective form in web application or you can populate it with values from the teams.csv file.

Once you've filled in teams.csv with enough teams' info, run the following command in the root directory:
```
python seed.py
```