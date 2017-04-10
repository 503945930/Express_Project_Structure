const path = require('path')
const glob = require('glob')

const routerOptions = {
  mergeParams: true
}

let defines = glob.sync('./modules/*/routers.js')

/**
 * register all modules routers
 *
 * @param {*} app
 */
function register (app) {
  // defines.forEach((item) => {
  //   let routerConfig = require(path.resolve(item))
  //   let sortedRouteAddresses = _.keys(routerConfig)
  //   const router = require('express').Router(routerOptions)
  //   _.each(sortedRouteAddresses, function (address) {
  //     let target = routerConfig[address]
  //     target = utils.analysis(target)
  //     let moduleController = glob.sync(`./modules/*/controller/${target.controller}.js`)[0]
  //     router[utils.detectVerb(address).verb]([utils.detectVerb(address).path], (req, res, next) => {
  //       const Controller = require(path.resolve(moduleController))
  //       let controller = new Controller({req, res})
  //       controller[target['action']]()
  //     })
  //   })
  defines.forEach((item) => {
    const router = require('express').Router(routerOptions)
    require(path.resolve(item))(router)
    app.use(app.airConfig.get('app').apiPrefix, router)
  })
};

module.exports.register = register
