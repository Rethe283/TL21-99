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

describe('healthcheck', () => {
  it('simple test', async () => {
    const res = await runShellCommand('se2199 healthcheck')
    expect(res.stdout).to.equal('{ status: \'OK\', dbconnection: \'connected\' }\n')
  })
})