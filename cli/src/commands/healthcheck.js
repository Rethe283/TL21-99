const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')
// const config = require('config')
axios.defaults.httpsAgent = new https.Agent()

class healthcheck extends Command {
  async run() {
    try {
      const {flags} = this.parse(healthcheck)
      let status
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      if (flags.format === 'csv') {
        status = await axios.get(`https://localhost:9130/interoperability/api/admin/healthcheck`)
      } else {
        status = await axios.get(`https://localhost:9130/interoperability/api/admin/healthcheck`)
      }
      console.log(status.data)
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

healthcheck.description = `tests live server for errors`

healthcheck.flags = {
  format: flags.string({
    options: ['json', 'csv'],
    required: true,
    default: 'json',
  }),
}

module.exports = healthcheck
