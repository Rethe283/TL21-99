const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')
const config = require('config')

axios.defaults.httpsAgent = new https.Agent()

class vehiclepasses extends Command {
  async run() {
    try {
      const {flags} = this.parse(vehiclepasses)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      let status
      if (flags.format === 'csv') {
        status = await axios.get(`https://localhost:9130/interoperability/api/vehicle_passes/${flags.veh1}/${flags.datefrom}/${flags.dateto}/?format=csv`)
      } else {
        status = await axios.get(`https://localhost:9130/interoperability/api/vehicle_passes/${flags.veh1}/${flags.datefrom}/${flags.dateto}`)
      }
      console.log(status.data)
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

vehiclepasses.flags = {
  format: flags.string({
    options: ['json', 'csv'],
    required: true,
    default: 'json',
  }),
  veh1: flags.string({
    required: true,
    description: 'vehicle id',
  }),
  datefrom: flags.string({
    required: true,
  }),
  dateto: flags.string({
    required: true,
  }),
}

vehiclepasses.description = 'passes of a vehicle regarding all operators both altogether and individually'

module.exports = vehiclepasses