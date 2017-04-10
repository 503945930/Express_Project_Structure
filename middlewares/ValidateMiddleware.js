const joi = require('joi')
/**
 * joi 验证中间件
 */

function ValidateMiddleware (schema) {
  return (req, res, next) => {
    let result = {}
    if (schema.body) {
      result = joi.validate(req.body, schema.body)
      if (result.error) {
        return res.apiError(result.error.message)
      }
    }
    if (schema.params) {
      result = joi.validate(req.params, schema.params)
      if (result.error) {
        return res.apiError(result.error.message)
      }
    }
    if (schema.query) {
      result = joi.validate(req.query, schema.query)
      if (result.error) {
        return res.apiError(result.error.message)
      }
    }
    if (schema.header) {
      result = joi.validate(req.headers, schema.header, {allowUnknown: true})
      if (result.error) {
        return res.apiError(result.error.message)
      }
    }
    next()
  }
}

module.exports = ValidateMiddleware
