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
cli/1.0.0 darwin-x64 node-v16.13.1
$ se2199 --help [COMMAND]
USAGE
  $ se2199 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`se2199 healthcheck`](#se2199-healthcheck)
* [`se2199 help [COMMAND]`](#se2199-help-command)
* [`se2199 passesperstation`](#se2199-passesperstation)
* [`se2199 resetpasses`](#se2199-resetpasses)
* [`se2199 resetstations`](#se2199-resetstations)
* [`se2199 resetvehicles`](#se2199-resetvehicles)

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

## `se2199 passesperstation`

Describe the command here

```
USAGE
  $ se2199 passesperstation

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
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
<!-- commandsstop -->
