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

describe('settlement',  () => {
    it('return info about the financial settlement between two operators in a time period', async () => {
        const res = await runShellCommand('se2199 settlement --op1 EG --op2 OO --datefrom 20180101 --dateto 20190404')
        expect(res.stdout).to.contain('PeriodFrom: \'2018-01-01\'')
        expect(res.stdout).to.contain('PeriodTo: \'2019-04-04\'')
        expect(res.stdout).to.contain('Financial_Settlement: \'Operator EG owes operator OO 15.45 euros\'')
      })
    it('return info about the financial settlement between two operators in a time period - no op1', async () => {
        const res = await runShellCommand('se2199 settlement --op2 OO --datefrom 20180101 --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--op1 OP1  operator 1\n')
    })
    it('return info about the financial settlement between two operators in a time period - no op2', async () => {
        const res = await runShellCommand('se2199 settlement --op1 EG --datefrom 20180101 --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--op2 OP2  operator 2\n')
    })
    it('return info about the financial settlement between two operators in a time period - no datefrom', async () => {
        const res = await runShellCommand('se2199 settlement --op1 EG --op2 OO --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--datefrom DATEFROM\n')
    })
    it('return info about the financial settlement between two operators in a time period - no dateto', async () => {
        const res = await runShellCommand('se2199 settlement --op1 EG --op2 OO --datefrom 20180101')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--dateto DATETO\n')
    })
    it('return info about the financial settlement between two operators in a time period - Error400', async () => {
        const res = await runShellCommand('se2199 settlement --op1 EG --op2 OO --datefrom 20200101 --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Request failed with status code 400\n')
    })   
})