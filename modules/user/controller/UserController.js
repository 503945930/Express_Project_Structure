import BaseControler from '../../../core/controller/Base'

/**
 * UserController.js
 *
 */
class UserController extends BaseControler {
  // constructor (args) {
  //   super(args)
  // }
  ip () {
    return super.ip()
  }
  getAll () {
    this.http.res.send('getAll')
  }
}

module.exports = UserController
