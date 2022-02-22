cli
===

cli for interoperability system

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli.svg)](https://npmjs.org/package/cli)
[![Downloads/week](https://img.shields.io/npm/dw/cli.svg)](https://npmjs.org/package/cli)
[![License](https://img.shields.io/npm/l/cli.svg)](https://github.com/ntua/TL21-99/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ se2199 COMMAND
running command...
$ se2199 (-v|--version|version)
cli/1.0.0 win32-x64 node-v16.13.1
$ se2199 --help [COMMAND]
USAGE
  $ se2199 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`se2199 admin`](#se2199-admin)
* [`se2199 chargesby`](#se2199-chargesby)
* [`se2199 healthcheck`](#se2199-healthcheck)
* [`se2199 help [COMMAND]`](#se2199-help-command)
* [`se2199 passesanalysis`](#se2199-passesanalysis)
* [`se2199 passescost`](#se2199-passescost)
* [`se2199 passesperstation`](#se2199-passesperstation)
* [`se2199 resetpasses`](#se2199-resetpasses)
* [`se2199 resetstations`](#se2199-resetstations)
* [`se2199 resetvehicles`](#se2199-resetvehicles)
* [`se2199 settlement`](#se2199-settlement)
* [`se2199 vehiclepasses`](#se2199-vehiclepasses)

## `se2199 admin`

admin scope command to update the passes collection using a csv file

```
USAGE
  $ se2199 admin

OPTIONS
  --passesupd --source pathto\file.csv

```

_See code: [src/commands/admin.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/admin.js)_

## `se2199 chargesby`

return num of passes from all the other operators and how much they owe

```
USAGE
  $ se2199 chargesby

OPTIONS
  --datefrom=datefrom  (required)
  --dateto=dateto      (required)
  --format=json|csv    (required) [default: json]
  --op1=op1            (required) operator_id
```

_See code: [src/commands/chargesby.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/chargesby.js)_

## `se2199 healthcheck`

tests live server for errors

```
USAGE
  $ se2199 healthcheck

OPTIONS
  --format=json|csv  (required) [default: json]
```

_See code: [src/commands/healthcheck.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/healthcheck.js)_

## `se2199 help [COMMAND]`

display help for se2199

```
USAGE
  $ se2199 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.3.1/src/commands/help.ts)_

## `se2199 passesanalysis`

return info about the passes with operator2's tags in stations of operator1

```
USAGE
  $ se2199 passesanalysis

OPTIONS
  --datefrom=datefrom  (required)
  --dateto=dateto      (required)
  --format=json|csv    (required) [default: json]
  --op1=op1            (required) the id of the operator where passes happen
  --op2=op2            (required) the id of the operator with the passing tag
```

_See code: [src/commands/passesanalysis.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/passesanalysis.js)_

## `se2199 passescost`

return number of passes and total cost

```
USAGE
  $ se2199 passescost

OPTIONS
  --datefrom=datefrom  (required)
  --dateto=dateto      (required)
  --format=json|csv    (required) [default: json]
  --op1=op1            (required) the operator to be paid
  --op2=op2            (required) the operator who owes
```

_See code: [src/commands/passescost.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/passescost.js)_

## `se2199 passesperstation`

return info about the passes from a certain station

```
USAGE
  $ se2199 passesperstation

OPTIONS
  --datefrom=datefrom  (required)
  --dateto=dateto      (required)
  --format=json|csv    (required) [default: json]
  --station=station    (required) the id of the station to search
```

_See code: [src/commands/passesperstation.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/passesperstation.js)_

## `se2199 resetpasses`

Reset passes

```
USAGE
  $ se2199 resetpasses

OPTIONS
  --format=json|csv  (required) [default: json]
```

_See code: [src/commands/resetpasses.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/resetpasses.js)_

## `se2199 resetstations`

Reset stations

```
USAGE
  $ se2199 resetstations

OPTIONS
  --format=json|csv  (required) [default: json]
```

_See code: [src/commands/resetstations.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/resetstations.js)_

## `se2199 resetvehicles`

Reset stations

```
USAGE
  $ se2199 resetvehicles

OPTIONS
  --format=json|csv  (required) [default: json]
```

_See code: [src/commands/resetvehicles.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/resetvehicles.js)_

## `se2199 settlement`

return info about the financial settlement between two operators in a time period

```
USAGE
  $ se2199 settlement

OPTIONS
  --datefrom=datefrom  (required)
  --dateto=dateto      (required)
  --format=json|csv    (required) [default: json]
  --op1=op1            (required) operator 1
  --op2=op2            (required) operator 2
```

_See code: [src/commands/settlement.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/settlement.js)_

## `se2199 vehiclepasses`

passes of a vehicle regarding all operators both altogether and individually

```
USAGE
  $ se2199 vehiclepasses

OPTIONS
  --datefrom=datefrom  (required)
  --dateto=dateto      (required)
  --format=json|csv    (required) [default: json]
  --veh1=veh1          (required) vehicle id
```

_See code: [src/commands/vehiclepasses.js](https://github.com/ntua/TL21-99/blob/v1.0.0/src/commands/vehiclepasses.js)_
<!-- commandsstop -->
