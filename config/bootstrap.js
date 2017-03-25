const config = require('config')
const { Map } = require('immutable')
const defaultConfig = require('../core/config/default')
const log = require('./log')
const csrf = require('./csrf')
const cors = require('./cors')
const database = require('./database')
const sockets = require('./sockets')

module.exports.init = function (app) {
  // console.log('init', config)
  app.airConfig = Map(defaultConfig).merge(Map(config)).set('log', log)
                                    .set('csrf', csrf).set('cors', cors)
                                    .set('csrf', database).set('sockets', sockets)
  // console.log('airConfig.port', app.airConfig)
  // console.log('airConfig.port', JSON.stringify(app.airConfig))
  // console.log('airConfig.port', app.airConfig.get('app').port)
}
