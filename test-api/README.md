# test-api

<!-- toc -->
* [API tests](#api_tests)
<!-- tocstop -->

## API tests
<!-- api_tests -->
Functional testing scripts for api which consist a postman collection. Run this collection in postman to do the testing. 
For each endpoint [chargesby, passesanalysis, passescost, passesperstation, settlement, vehiclepasses] we test if:
* Status code is 200
* Response time is less than X ms
* Content-Type is present
* Test data type of the response is the expected one
<!-- api_testsstop -->
