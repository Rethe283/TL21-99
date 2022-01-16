/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable node/no-unpublished-require */
const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')
const config = require('config')
axios.defaults.httpsAgent = new https.Agent()

class resetpasses extends Command {
  async run() {
    try {
      const {flags} = this.parse(resetpasses)
      await axios.post(`http://localhost:9130/interoperability/api/admin/resetpasses`)
      console.log('Reset Successful')
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

resetpasses.description = `Reset passes`

resetpasses.flags = {
  format: flags.string({
    options: ['json', 'csv'],
    required: true,
    default: 'json',
  }),
}

module.exports = resetpasses
