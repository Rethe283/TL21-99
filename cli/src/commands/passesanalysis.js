/* eslint-disable unicorn/filename-case */
/* eslint-disable no-console */
/* eslint-disable node/no-unpublished-require */
const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')
const config = require('config')

axios.defaults.httpsAgent = new https.Agent()

class passesanalysis extends Command {
  async run() {
    try {
      const {flags} = this.parse(passesanalysis)
      //axios.defaults.headers.common['X-OBSERVATORY-AUTH'] = flags.apikey
      let status
      if (flags.format === 'csv') {
        status = await axios.get(`http://localhost:9130/interoperability/api/PassesAnalysis/${flags.op1}/${flags.op2}/${flags.datefrom}/${flags.dateto}/?format=csv`)
      } else {
        status = await axios.get(`http://localhost:9130/interoperability/api/PassesAnalysis/${flags.op1}/${flags.op2}/${flags.datefrom}/${flags.dateto}`)
      }
      console.log(status.data)
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

passesanalysis.flags = {
  format: flags.string({
    options: ['json', 'csv'],
    required: true,
    default: 'json',
  }),
  // apikey: flags.string({
  //   required: true,
  //   description: 'the api key used for authorization',
  // }),
  op1: flags.string({
    required: true,
    description: 'the id of the operator where passes happen',
  }),
  op2: flags.string({
    required: true,
    description: 'the id of the operator with the passing tag',
  }),
  datefrom: flags.string({
    required: true,
  }),
  dateto: flags.string({
    required: true,
  }),
}

passesanalysis.description = 'return info about the passes with operator2\'s tags in stations of operator1'

module.exports = passesanalysis

