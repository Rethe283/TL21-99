# Back-end
## Overview:

- Source code for data insertion, administration and access (backend).
- Folder "Data" contains mock data for database initialization and testing.
- Folder "models" contains database models.
- Folder "routes/admin" contains all the administrator endpoints.
- All the API Endpoints are described api/README.md

## Initializing Database

1. Install and launch a mongodb server locally
2. Create a database
3. Import collections from data folder (passes, pivot, stations, vehicles)

## Base URL

https://localhost:9130/interoperability/api/
##  Admin Endpoints

- {baseURL}/admin/healthcheck 

Supports GET method and checks end-to-end user-database connectivity.


- {baseURL}/admin/resetpasses

Supports POST method and initializes the "passes" collection in the mongodb database by deleting all data.


- {baseURL}/admin/resetstations

Supports POST method and initializes the "stations" collection in the mongodb database by deleting and inserting given mock data.

- {baseURL}/admin/resetvehicles

Supports POST method and initializes the "vehicles" collection in the mongodb database by deleting and inserting given mock data.

- {baseURL}/admin/PassesUpdate

Supports POST method and initializes the "passes" collection in the mongodb database by inserting data from a csv file with the name "newpasses2199" in a given location ./Data/newpasses2199.csv.