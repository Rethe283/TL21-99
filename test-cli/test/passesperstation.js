const {exec} = require('child_process')
const axios = require('axios')
var expect = require('chai').expect
const util = require('util')
const execProm = util.promisify(exec)
//const __homedir = require('os').homedir()
//const fs = require('fs')
const passes_model = require('../../backend/models/passes_model')
//const Vehicle = require('../../../../back-end/api/models/Vehicle')

//require('../testserver')

async function runShellCommand(command) {
  let result
  try {
    result = await execProm(command)
  } catch (error) {
    result = error
  }
  if (Error[Symbol.hasInstance](result))
    return

  return result
}

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min
// }


describe('passesPerStation',  () => {
    it('return info about the passes from a certain station', async () => {
        const pass = await passes_model.findOne()
        //const res = await runShellCommand(`se2199 passesperstation --station ${pass.stationRef} --datefrom 20200515 --dateto 20200519`)
        const res = await runShellCommand(`se2199 passesperstation --station EG01 --datefrom 20200515 --dateto 20200519`)
        //expect(res.stdout).to.contain(`Station: '${pass.stationRef}'`)
        expect(res.stdout).to.contain(`Station: 'EG01'`)
        expect(res.stdout).to.contain('StationOperator')
        expect(res.stdout).to.contain('PeriodFrom')
        expect(res.stdout).to.contain('PeriodTo')
        expect(res.stdout).to.contain('NumberOfPasses')
        expect(res.stdout).to.contain('RequestTimestamp')
        expect(res.stdout).to.contain('PassList')
        expect(res.stdout).to.contain('PassIndex: 1')
        expect(res.stdout).to.contain(`passID: \'XDO9488891\'`)
        expect(res.stdout).to.contain('PassTimeStamp: \'2020-5-16 0:40:37\'')
        expect(res.stdout).to.contain('VehicleID: \'XE59BZM26378\'')
        expect(res.stdout).to.contain('TagProvider: \'EG\'')
        expect(res.stdout).to.contain('PassType: \'home\'')
        expect(res.stdout).to.contain('PassCharge: 2.5')
        expect(res.stdout).to.contain('PassIndex: 2')
        expect(res.stdout).to.contain('passID: \'IGB7226688\'')
        expect(res.stdout).to.contain('PassTimeStamp: \'2020-5-18 11:2:26\'')
        expect(res.stdout).to.contain('VehicleID: \'DV04FQL29609\'')
        expect(res.stdout).to.contain('TagProvider: \'AO\'')
        expect(res.stdout).to.contain('PassType: \'visitor\'')
        expect(res.stdout).to.contain('PassCharge: 2.2')
      })
    it('return info about the passes from a certain station - no station', async () => {
        const res = await runShellCommand(`se2199 passesperstation --datefrom 20200515 --dateto 20200519`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--station STATION  the id of the station to search\n')
    })
    it('return info about the passes from a certain station - no datefrom', async () => {
        const res = await runShellCommand(`se2199 passesperstation --station EG01 --dateto 20200519`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--datefrom DATEFROM\n')
    })
    it('return info about the passes from a certain station - no dateto', async () => {
        const res = await runShellCommand(`se2199 passesperstation --station EG01 --datefrom 20200515`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--dateto DATETO\n')
    })
    //     const res = await runShellCommand(`se2199 passesperstation --station EG01 --datefrom 20200515 --dateto 20203019`)
    it('return info about the passes from a certain station - Error400', async () => {
        const res = await runShellCommand(`se2199 passesperstation --station EG01 --datefrom 20210515 --dateto 20200919`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Request failed with status code 400\n')
    })
    it('return info about the passes from a certain station - Error402', async () => {
      const res = await runShellCommand(`se2199 passesperstation --station EG01 --datefrom 20200919 --dateto 20200919`)
      expect(res.stdout).to.equal('')
      expect(res.stderr).to.contain('Error: Request failed with status code 402\n')
    })
})




