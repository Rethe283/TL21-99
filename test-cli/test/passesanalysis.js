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
        expect(res.stdout).to.contain('op1_ID: \'EG\'')
        expect(res.stdout).to.contain('op2_ID: \'KO\'')
        expect(res.stdout).to.contain('RequestTimestamp')
        expect(res.stdout).to.contain('PeriodFrom: \'2020-01-01\'')
        expect(res.stdout).to.contain('PeriodTo: \'2020-01-06\'')
        expect(res.stdout).to.contain('NumberOfPasses: 1')
        expect(res.stdout).to.contain('PassesList:')
        expect(res.stdout).to.contain('PassIndex: 1')
        expect(res.stdout).to.contain('passID: \'CUR4274800\'')
        expect(res.stdout).to.contain('PassTimeStamp: \'2020-1-5 3:52:22\'')
        expect(res.stdout).to.contain('VehicleID: \'QW79CHL42244\'')
        expect(res.stdout).to.contain('TagProvider: \'KO\'')
        expect(res.stdout).to.contain('Charge: 2.8')
      })
    it('return info about the passes with operator2\'s tags in stations of operator1 - no op1', async () => {
        const res = await runShellCommand('se2199 passesanalysis --op2 KO --datefrom 20200101 --dateto 20200106')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--op1 OP1  the id of the operator where passes happen\n')
    })
    it('return info about the passes with operator2\'s tags in stations of operator1 - no op2', async () => {
        const res = await runShellCommand('se2199 passesanalysis --op1 EG --datefrom 20200101 --dateto 20200106')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain(' --op2 OP2  the id of the operator with the passing tag\n')
    })
    it('return info about the passes with operator2\'s tags in stations of operator1 - no datefrom', async () => {
        const res = await runShellCommand('se2199 passesanalysis --op1 EG --op2 KO --dateto 20200106')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--datefrom DATEFROM\n')
    })
    it('return info about the passes with operator2\'s tags in stations of operator1 - no dateto', async () => {
        const res = await runShellCommand('se2199 passesanalysis --op1 EG --op2 KO --datefrom 20200101')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--dateto DATETO\n')
    })
    it('return info about the passes with operator2\'s tags in stations of operator1 - Error400', async () => {
        const res = await runShellCommand('se2199 passesanalysis --op1 EG --op2 KO --datefrom 20210101 --dateto 20200106')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Request failed with status code 400\n')
    })
    it('return info about the passes with operator2\'s tags in stations of operator1 - Error402', async () => {
      const res = await runShellCommand('se2199 passesanalysis --op1 EG --op2 KO --datefrom 20200106 --dateto 20200106')
      expect(res.stdout).to.equal('')
      expect(res.stderr).to.contain('Error: Request failed with status code 402\n')
    })
})