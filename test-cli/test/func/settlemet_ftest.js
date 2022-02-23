const {exec} = require('child_process')
const axios = require('axios')
var expect = require('chai').expect
const util = require('util')
const execProm = util.promisify(exec)

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

describe('settlement',  () => {
    it('return info about the financial settlement between two operators in a time period', async () => {
        const res = await runShellCommand('se2199 settlement --op1 EG --op2 OO --datefrom 20180101 --dateto 20190404')
        expect(res.stdout).to.contain('PeriodFrom:')
        expect(res.stdout).to.contain('PeriodTo: ')
        expect(res.stdout).to.contain('Financial_Settlement:')
      })
})