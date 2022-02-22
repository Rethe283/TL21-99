# test-cli

<!-- toc -->
* [Initial preparation](#initial_preparation)
* [Unit testing](#unit_testing)
* [Admin unit/functional testing](#admin)
* [Functional testing](#functional_testing)
<!-- tocstop -->

## Initial preparation
<!-- initial_preparation -->
```
Inside the test-cli directory install the required modules

    $npm install

```
<!-- initial_preparationstop -->
## Unit testing
<!-- unit_testing -->
```
[chargesby, passesanalysis, passescost, passesperstation, settlement, vehiclepasses]

For cli unit testing inside the test-cli directory 

    $npm run test

```
<!-- unit_testingstop -->

## Admin unit/functional testing
<!-- admin_testing -->
```
[admin passesupd, healthcheck, resetpasses, resetstations, resetvehicles]

For admin unit/functional testing inside the test-cli directory 

    $npm run test-admin 

*Note: after that testing the "passes" collection is fillled only* 
*with dummy data for testing purposes via the newpasses_copy.csv file,* 
*so remember to update that collection (manually or via cli command)*

```
<!-- admin_testingstop -->

## Functional testing
<!-- functional_testing -->
```
[chargesby, passesanalysis, passescost, passesperstation, settlement, vehiclepasses]

For cli functional testing inside the test-cli directory 
    $npm run test-functional

```
<!-- functional_testingstop -->