const config = require('config')
const { Map } = require('immutable')
const defaultConfig = require('../core/config/default')
const log = require('./log')
const csrf = require('./csrf')
const cors = require('./cors')
const database = require('./database')
const sockets = require('./sockets')
const Sequelize = require('../core/database/sequelize')

module.exports.init = function (app) {
  // console.log('init', config)
  app.airConfig = Map(defaultConfig).merge(Map(config)).set('log', log)
                                    .set('csrf', csrf).set('cors', cors)
                                    .set('db', database).set('sockets', sockets)

  let db = new Sequelize(app.airConfig.get('db'))
  db.init()

  // console.log('airConfig.port', app.airConfig)
  // console.log('airConfig.port', JSON.stringify(app.airConfig))
  // console.log('airConfig.port', app.airConfig.get('app').port)
}
