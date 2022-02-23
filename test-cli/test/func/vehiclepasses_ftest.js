const {exec} = require('child_process')
const axios = require('axios')
var expect = require('chai').expect
const util = require('util')
const execProm = util.promisify(exec)

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

describe('vehiclepasses',  () => {
    it('passes of a vehicle regarding all operators both altogether and individually', async () => {
        const res = await runShellCommand('se2199 vehiclepasses --veh1 QO68DIC93032 --datefrom 20190101 --dateto 20200101')
        expect(res.stdout).to.contain('vehicleID:')
        expect(res.stdout).to.contain('NumberOfPasses:')
        expect(res.stdout).to.contain('TotalAmountCharged:')
        expect(res.stdout).to.contain('VisitsPerStation:')
        expect(res.stdout).to.contain('StationOperator:')
        expect(res.stdout).to.contain('PassesCount:')
        expect(res.stdout).to.contain('ChargePerStation:')
      })
})
