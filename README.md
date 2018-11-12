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