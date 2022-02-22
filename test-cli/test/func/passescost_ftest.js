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

describe('passescost',  () => {
    it('return number of passes and total cost', async () => {
        const res = await runShellCommand('se2199 passescost --op1 OO --op2 EG --datefrom 20180101 --dateto 20190404')
        expect(res.stdout).to.contain('op1_ID:')
        expect(res.stdout).to.contain('op2_ID:')
        expect(res.stdout).to.contain('RequestTimestamp')
        expect(res.stdout).to.contain('PeriodFrom:')
        expect(res.stdout).to.contain('PeriodTo:')
        expect(res.stdout).to.contain('NumberOfPasses:')
        expect(res.stdout).to.contain('PassesCost:')
      })
})