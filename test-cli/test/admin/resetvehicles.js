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

describe('resetvehicles', () => {
  it('it resets all vehicles an sets them again', async () => {
    const res = await runShellCommand('se2199 resetvehicles')
    expect(res.stdout).to.equal('Reset Successful\n')
  })
})