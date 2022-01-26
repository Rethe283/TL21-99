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
        expect(res.stdout).to.contain('vehicleID: \'QO68DIC93032\'')
        expect(res.stdout).to.contain('NumberOfPasses: 169')
        //expect(res.stdout).to.contain('TotalAmountCharged: 2811.1')
        expect(res.stdout).to.contain('TotalAmountCharged: 429.3')
        expect(res.stdout).to.contain('VisitsPerStation:')
        //expect(res.stdout).to.contain('{\n StationOperator: \'MR\',\n PassesCount: 145,\n ChargePerStation: 360.7\n}')
        expect(res.stdout).to.contain('{ StationOperator: \'GF\', PassesCount: 1, ChargePerStation: 373.7 }')
        expect(res.stdout).to.contain('{ StationOperator: \'NE\', PassesCount: 6, ChargePerStation: 388.1 }')
        expect(res.stdout).to.contain('{ StationOperator: \'AO\', PassesCount: 7, ChargePerStation: 407.7 }')
        expect(res.stdout).to.contain('{ StationOperator: \'OO\', PassesCount: 7, ChargePerStation: 423.8 }')
        expect(res.stdout).to.contain('{ StationOperator: \'KO\', PassesCount: 2, ChargePerStation: 427.8 }')
        expect(res.stdout).to.contain('{ StationOperator: \'EG\', PassesCount: 1, ChargePerStation: 429.3 }')
      })
    it('passes of a vehicle regarding all operators both altogether and individually - no veh1', async () => {
        const res = await runShellCommand('se2199 vehiclepasses --datefrom 20190101 --dateto 20200101')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--veh1 VEH1  vehicle id\n')
    })
    it('passes of a vehicle regarding all operators both altogether and individually - no datefrom', async () => {
        const res = await runShellCommand('se2199 vehiclepasses --veh1 QO68DIC93032 --dateto 20200101')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--datefrom DATEFROM\n')
    })
    it('passes of a vehicle regarding all operators both altogether and individually - no dateto', async () => {
        const res = await runShellCommand('se2199 vehiclepasses --veh1 QO68DIC93032 --datefrom 20190101')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Missing required flag:\n')
        expect(res.stderr).to.contain('--dateto DATETO\n')
    })
    it('passes of a vehicle regarding all operators both altogether and individually - Error400', async () => {
        const res = await runShellCommand('se2199 vehiclepasses --veh1 QO68DIC93032 --datefrom 20210101 --dateto 20200101')
        expect(res.stdout).to.equal('')
        expect(res.stderr).to.contain('Error: Request failed with status code 400\n')
    })
})
