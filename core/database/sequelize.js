const path = require('path')
const glob = require('glob')
const _ = require('lodash')
const Sequelize = require('sequelize')

class sequelize {
  constructor (config = {}) {
    this.config = config
  }
  getConnection () {
    if (this.connection) {
      return Promise.resolve(this.connection)
    }
    let config = this.config
    return new Sequelize(config.database, config.username, config.password, config.options)
  }
  init () {
    this.associate()
  }
  async associate () {
    let sequelize = this.getConnection()
    let models = {}

    let defines = glob.sync('*.js', {
      root: '',
      cwd: 'models/'
    })
   /// console.log('sequelize', sequelize)
    // console.log('defines', defines)
    defines.forEach(function (define) {
      let model = sequelize.import(path.resolve('models/' + define))
      models[model.name] = model
    })
    Sequelize.models = models
    _.forIn(models, function (model) {
      if (model.associate) {
        model.associate(models)
      }
    })
    await sequelize.sync()
  }
}

module.exports = sequelize
