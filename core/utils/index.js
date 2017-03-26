const _ = require('lodash')

exports.detectVerb = function (haystack) {
  let verbExpr = /^(all|get|post|put|delete|trace|options|connect|patch|head)\s+/i
  let verbSpecified = _.last(haystack.match(verbExpr) || []) || ''
  verbSpecified = verbSpecified.toLowerCase()

  // If a verb was specified, eliminate the verb from the original string
  if (verbSpecified) {
    haystack = haystack.replace(verbExpr, '')
  }

  return {
    verb: verbSpecified,
    original: haystack,
    path: haystack
  }
}

exports.analysis = function (value) {
  let arr = value.split('.')

  return {
    controller: arr[0],
    action: arr[1]
  }
}
