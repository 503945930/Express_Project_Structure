const path = require('path')
const glob = require('glob')
const _ = require('lodash')
const routerOptions = {
  mergeParams: true
}

let defines = glob.sync('modules/*/controller.js')
defines = _.union(defines, glob.sync('modules/*/controllers/*.js'))
function register (app) {
  defines.forEach(function (define) {
    const router = require('express').Router(routerOptions)
    var prefix = require(path.resolve(define)).register(router) // eslint-disable-line global-require
    app.use(prefix, router)
  })
};

module.exports.register = register
