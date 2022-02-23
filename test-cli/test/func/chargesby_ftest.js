const {exec} = require('child_process')
const axios = require('axios')
var expect = require('chai').expect
var assert = require('chai').assert
const util = require('util')
const execProm = util.promisify(exec)
const passes_model = require('../../../backend/models/passes_model')

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
        expect(res.stdout).to.contain('op_ID:')
        expect(res.stdout).to.contain('NumberOfPasses:')
        expect(res.stdout).to.contain('PPOList:')
        //expect(PPOList).to.have.property('VisitingOperator').with.lengthOf(3)
        //assert.typeOf(op_ID, 'string')
      })
})
