# test-cli

<!-- toc -->
* [Initial preparation](#initial_preparation)
* [Unit testing](#unit_testing)
* [Admin testing](#admin)
* [Functional testing](#functional_testing)
<!-- tocstop -->

# Initial preparation
<!-- initial_preparation -->
```sh-session

Inside the test-cli directory install the required modules
    $npm install

```
<!-- initial_preparationstop -->
# Unit testing
<!-- unit_testing -->
```
For cli unit testing inside the test-cli directory 
    $npm run test

```
<!-- unit_testingstop -->

# Admin testing
<!-- admin_testing -->
```
For admin unit/functional testing inside the test-cli directory 
    $npm run test-admin 

Note: after that testing the "passes" collection is fillled only with dummy data for testing purposes via the newpasses_copy.csv file, so remember to update that collection (manually or via cli command)

```
<!-- admin_testingstop -->

# Functional testing
<!-- functional_testing -->
```
For cli functional testing inside the test-cli directory 
    $npm run test-functional

```
<!-- functional_testingstop -->