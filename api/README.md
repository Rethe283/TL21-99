# REST API

## Overview:

- Source code for all stakeholder endpoints.
- Ask for SSL certificate via e-mail.
- Folder "routes/utilities" contains auxiliary finctions and middleware for stakeholder endpoints.
- Folder "routes" contains six stakeholder endpoints supporting the GET method as decribed below.

## NodeJS Packages

 "dependencies": {
    "bootstrap": "^5.1.3",

    "csv-2-json": "^0.1.6",

    "csvtojson": "^2.0.10",

    "express": "^4.16.4",

    "flat": "^5.0.2",

    "json-2-csv": "^3.15.0",

    "json2csv": "^5.0.6",

    "jsontocsv": "^0.3.0",

    "lodash": "^4.17.21",

    "moment": "^2.29.1",

    "mongodb": "^4.2.2",

    "mongoose": "^6.1.5"
  }

## Installation

For a quick installation in the TL21-99/api/ directory:

$ npm run installer

$ npm start

## Base URL

https://localhost:9130/interoperability/api/

##  Stakeholder Endpoints

### {baseURL}/PassesPerStation/:stationID/:date_from/:date_to

Returns a list of the Passes for the selected Station and time period given in the URL. 


### {baseURL}/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to

Returns a list of the Passes Analysis for all stations of the first provider with the second provider's tag for the given time period. All pass events are of type "Visitor", which is defined in the "backend/models" folder.


### {baseURL}/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to

Returns the total amount of passes and the respective cost for passes through the first provider's stations by vehicles with the second provider's tag for the given time period.


### {baseURL}/ChargesBy/:op_ID/:date_from/:date_to

Returns the total amount of passes and the respective cost for all passes through the provider's stations grouped by their provider's tag. 

### {baseURL}/settlement/:op1_ID/:op2_ID/:date_from/:date_to

Returns the financial settlement between the two providers for the given time period.

### {baseURL}/vehicle_passes/:vehicleID/:date_from/:date_to

Returns the total amount of passes and the respective cost for the selected vehicle both in total and individually for every provider's stations.
