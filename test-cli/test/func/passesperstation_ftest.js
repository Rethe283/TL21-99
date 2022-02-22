const {exec} = require('child_process')
const axios = require('axios')
var expect = require('chai').expect
const util = require('util')
const execProm = util.promisify(exec)

const passes_model = require('../../../backend/models/passes_model')

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


describe('passesPerStation',  () => {
    it('return info about the passes from a certain station', async () => {
        const pass = await passes_model.findOne()
        const res = await runShellCommand(`se2199 passesperstation --station EG01 --datefrom 20200515 --dateto 20200519`)
        //expect(res.stdout).to.contain(`Station: '${pass.stationRef}'`)
        expect(res.stdout).to.contain(`Station:`)
        expect(res.stdout).to.contain('StationOperator')
        expect(res.stdout).to.contain('PeriodFrom')
        expect(res.stdout).to.contain('PeriodTo')
        expect(res.stdout).to.contain('NumberOfPasses')
        expect(res.stdout).to.contain('RequestTimestamp')
        expect(res.stdout).to.contain('PassList')
        expect(res.stdout).to.contain('PassIndex:')
        expect(res.stdout).to.contain(`passID:`)
        expect(res.stdout).to.contain('PassTimeStamp:')
        expect(res.stdout).to.contain('VehicleID:')
        expect(res.stdout).to.contain('TagProvider:')
        expect(res.stdout).to.contain('PassType: ')
        expect(res.stdout).to.contain('PassCharge:')
      })
})
