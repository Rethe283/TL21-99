const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')
const config = require('config')

axios.defaults.httpsAgent = new https.Agent()

class passesperstation extends Command {
  async run() {
    try {
      const {flags} = this.parse(passesperstation)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      let status
      if (flags.format === 'csv') {
        status = await axios.get(`https://localhost:9130/interoperability/api/PassesPerStation/${flags.station}/${flags.datefrom}/${flags.dateto}/?format=csv`)
      } else {
        status = await axios.get(`https://localhost:9130/interoperability/api/PassesPerStation/${flags.station}/${flags.datefrom}/${flags.dateto}`)
      }
      console.log(status.data)
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

passesperstation.flags = {
  format: flags.string({
    options: ['json', 'csv'],
    required: true,
    default: 'json',
  }),
  station: flags.string({
    required: true,
    description: 'the id of the station to search',
  }),
  datefrom: flags.string({
    required: true,
  }),
  dateto: flags.string({
    required: true,
  }),
}

passesperstation.description = 'return info about the passes from a certain station'

module.exports = passesperstation
