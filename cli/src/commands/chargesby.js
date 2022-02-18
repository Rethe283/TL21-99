/* eslint-disable unicorn/filename-case */
/* eslint-disable no-console */
/* eslint-disable node/no-unpublished-require */
const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')

axios.default.httpsAgent = new https.Agent()

class chargesby extends Command {
  async run() {
    try {
      const {flags} = this.parse(chargesby)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      let status
      if (flags.format === 'csv') {
        status = await axios.get(`https://localhost:9130/interoperability/api/ChargesBy/${flags.op1}/${flags.datefrom}/${flags.dateto}/?format=csv`)
      } else {
        status = await axios.get(`https://localhost:9130/interoperability/api/ChargesBy/${flags.op1}/${flags.datefrom}/${flags.dateto}`)
      }
      console.log(status.data)
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

chargesby.flags = {
  format: flags.string({
    options: ['json', 'csv'],
    required: true,
    default: 'json',
  }),
  op1: flags.string({
    required: true,
    description: 'operator_id',
  }),
  datefrom: flags.string({
    required: true,
  }),
  dateto: flags.string({
    required: true,
  }),
}

chargesby.description = 'return num of passes from all the other operators and how much they owe'

module.exports = chargesby