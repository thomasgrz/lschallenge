# SportSponsor
Simple coding challenge for technical review.

## Start the web service
```
  npm start
```

### Connect your local database
SportSponsor does require a local PostgresQL database.
Navigate to the .env file in the root directory and change the DATABASE_URL like so:
```
DATABASE_URL=postgres://localhost:<YOUR_PSQL_PORT>/<YOUR_PSQL_DATABASE>
```

### Populate your database with teams to test the application
You can populate your SportSponsor database one entry at a time using respective form in web application or you can populate it with values from the teams.csv file.

Once you've filled in the teams.csv file run the following command in the root directory:
```
python seed.py
```