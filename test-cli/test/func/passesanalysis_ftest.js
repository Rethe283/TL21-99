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

describe('passesanalysis',  () => {
    it('return info about the passes with operator2\'s tags in stations of operator1', async () => {
        const res = await runShellCommand('se2199 passesanalysis --op1 EG --op2 KO --datefrom 20200101 --dateto 20200106')
        expect(res.stdout).to.contain('op1_ID:')
        expect(res.stdout).to.contain('op2_ID:')
        expect(res.stdout).to.contain('RequestTimestamp')
        expect(res.stdout).to.contain('PeriodFrom:')
        expect(res.stdout).to.contain('PeriodTo:')
        expect(res.stdout).to.contain('NumberOfPasses:')
        expect(res.stdout).to.contain('PassesList:')
        expect(res.stdout).to.contain('PassIndex:')
        expect(res.stdout).to.contain('passID:')
        expect(res.stdout).to.contain('PassTimeStamp:')
        expect(res.stdout).to.contain('VehicleID:')
        expect(res.stdout).to.contain('Charge:')
      })
})