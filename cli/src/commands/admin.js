/* eslint-disable node/no-missing-require */
/* eslint-disable no-negated-condition */
/* eslint-disable no-console */
const {Command, flags} = require('@oclif/command')

const https = require('https')
const axios = require('axios')
const chalk = require('chalk')
//const fs = require('fs')
const config = require('config')
//const FormData = require('form-data')
axios.defaults.httpsAgent = new https.Agent()

class admin extends Command {
  async run() {
    try {
      const {flags} = this.parse(admin)

      if (flags.passesupd !== undefined) {
        
        let status
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        if (flags.format === 'csv') {
          status = await axios.post(`https://localhost:9130/interoperability/api/admin/PassesUpdate?file=${flags.source}/?format=csv`)
        } else {
          status = await axios.post(`https://localhost:9130/interoperability/api/admin/PassesUpdate?file=${flags.source}`)
        }
        console.log(status.data)
      }
    } catch (error) {
      console.error(chalk.red(error))
    }
  }
}

admin.flags = {
  passesupd: {
    Boolean,
    dependsOn: ['source'],
    description: 'update passes in database from --source csv',
  },
  source: flags.string({
    //dependsOn: ['passessupd'],
    description: 'source = path of csv file',
  }),
  format: flags.string({
    options: ['json', 'csv'],
    default: 'json',
  })
}

admin.description = 'system management calls'

module.exports = admin