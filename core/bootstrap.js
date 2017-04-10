const config = require('config')
const { Map } = require('immutable')
const defaultConfig = require('./config/default')
const log = require('../config/log')
const csrf = require('../config/csrf')
const cors = require('../config/cors')
const database = require('../config/database')
const sockets = require('../config/sockets')
const Sequelize = require('./database/sequelize')

module.exports.init = function (app) {
  // console.log('init', config)
  app.airConfig = Map(defaultConfig).merge(Map(config)).set('log', log)
                                    .set('csrf', csrf).set('cors', cors)
                                    .set('db', database).set('sockets', sockets)

  global.airConfig = app.airConfig
  let db = new Sequelize(app.airConfig.get('db'))
  db.init()

  // console.log('airConfig.port', app.airConfig)
  // console.log('airConfig.port', JSON.stringify(app.airConfig))
  // console.log('airConfig.port', app.airConfig.get('app').port)
}
