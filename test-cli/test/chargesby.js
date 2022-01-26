const {exec} = require('child_process')
const axios = require('axios')
var expect = require('chai').expect
const util = require('util')
const execProm = util.promisify(exec)
const passes_model = require('../../backend/models/passes_model')

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

describe('chargesby',  () => {
    it('return num of passes from all the other operators and how much they owe', async () => {
        const pass = await passes_model.findOne()
        const res = await runShellCommand(`se2199 chargesby --op1 EG --datefrom 20190101 --dateto 20200101`)
        expect(res.stdout).to.contain(`op_ID: 'EG'`)
        expect(res.stdout).to.contain('NumberOfPasses: 343')
        expect(res.stdout).to.contain('{ VisitingOperator: \'GF\', CountOfPasses: 71, ChargeSum: 166.1 }')
        expect(res.stdout).to.contain('{ VisitingOperator: \'NE\', CountOfPasses: 65, ChargeSum: 125.05 }')
        expect(res.stdout).to.contain('{ VisitingOperator: \'OO\', CountOfPasses: 62, ChargeSum: 138.6 }')
        expect(res.stdout).to.contain('{ VisitingOperator: \'MR\', CountOfPasses: 42, ChargeSum: 87.4 }')
        expect(res.stdout).to.contain('{ VisitingOperator: \'AO\', CountOfPasses: 46, ChargeSum: 83.85 }')
        expect(res.stdout).to.contain('{ VisitingOperator: \'KO\', CountOfPasses: 57, ChargeSum: 111.85 }')
      })
    it('return num of passes from all the other operators and how much they owe - no op1', async () => {
        const res = await runShellCommand(`se2199 chargesby --datefrom 20190101 --dateto 20200101`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('-op1 OP1  operator_id\n')
    })
    it('return num of passes from all the other operators and how much they owe - no datefrom', async () => {
        const res = await runShellCommand(`se2199 chargesby --op1 EG --dateto 20200101`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--datefrom DATEFROM\n')
    })
    it('return num of passes from all the other operators and how much they owe - no dateto', async () => {
        const res = await runShellCommand(`se2199 chargesby --op1 EG --datefrom 20190101`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--dateto DATETO\n')
    })
    it('return num of passes from all the other operators and how much they owe - Error400', async () => {
        const res = await runShellCommand(`se2199 chargesby --op1 EG --datefrom 20210101 --dateto 20200101`)
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Request failed with status code 400\n')
    })
})
