import BaseControler from '../../../core/controller/Base'

/**
 * UserController.js
 *
 */
class UserController extends BaseControler {
  constructor (...args) {
    super()
    /// /this.test = 'test'
  }
  ip () {
    console.log(super.ip())
  }
}

module.exports = UserController
