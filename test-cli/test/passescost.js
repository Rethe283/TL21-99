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
        expect(res.stdout).to.contain('op1_ID: \'OO\'')
        expect(res.stdout).to.contain('op2_ID: \'EG\'')
        expect(res.stdout).to.contain('RequestTimestamp')
        expect(res.stdout).to.contain('PeriodFrom: \'2018-01-01\'')
        expect(res.stdout).to.contain('PeriodTo: \'2019-04-04\'')
        expect(res.stdout).to.contain('NumberOfPasses: 18')
        expect(res.stdout).to.contain('PassesCost: 38.6')
      })
    it('return number of passes and total cost - no op1', async () => {
        const res = await runShellCommand('se2199 passescost --op2 EG --datefrom 20180101 --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain(' --op1 OP1  the operator to be paid\n')
    })
    it('return number of passes and total cost - no op2', async () => {
        const res = await runShellCommand('se2199 passescost --op1 OO --datefrom 20180101 --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain(' --op2 OP2  the operator who owes\n')
    })
    it('return number of passes and total cost - no datefrom', async () => {
        const res = await runShellCommand('se2199 passescost --op1 OO --op2 EG --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--datefrom DATEFROM\n')
    })
    it('return number of passes and total cost - no dateto', async () => {
        const res = await runShellCommand('se2199 passescost --op1 OO --op2 EG --datefrom 20180101')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--dateto DATETO\n')
    })
    it('return number of passes and total cost - Error400', async () => {
        const res = await runShellCommand('se2199 passescost --op1 OO --op2 EG --datefrom 20200101 --dateto 20190404')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Request failed with status code 400\n')
    })
    it('return number of passes and total cost - Error402', async () => {
      const res = await runShellCommand('se2199 passescost --op1 OO --op2 EG --datefrom 20200101 --dateto 20200101')
      expect(res.stdout).to.equal('')
      expect(res.stderr).to.contain('Error: Request failed with status code 402\n')
    })
})
