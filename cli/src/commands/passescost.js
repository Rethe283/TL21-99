/* eslint-disable unicorn/filename-case */
/* eslint-disable no-console */
/* eslint-disable node/no-unpublished-require */
const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')
const config = require('config')

axios.defaults.httpsAgent = new https.Agent()

class passescost extends Command {
  async run() {
    try {
      const {flags} = this.parse(passescost)
      let status
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      if (flags.format === 'csv') {
        status = await axios.get(`https://localhost:9130/interoperability/api/PassesCost/${flags.op1}/${flags.op2}/${flags.datefrom}/${flags.dateto}/?format=csv`)
      } else {
        status = await axios.get(`https://localhost:9130/interoperability/api/PassesCost/${flags.op1}/${flags.op2}/${flags.datefrom}/${flags.dateto}`)
      }
      console.log(status.data)
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

passescost.flags = {
  format: flags.string({
    options: ['json', 'csv'],
    required: true,
    default: 'json',
  }),
  op1: flags.string({
    required: true,
    description: 'the operator to be paid',
  }),
  op2: flags.string({
    required: true,
    description: 'the operator who owes',
  }),
  datefrom: flags.string({
    required: true,
  }),
  dateto: flags.string({
    required: true,
  }),
}

passescost.description = 'return number of passes and total cost'

module.exports = passescost
