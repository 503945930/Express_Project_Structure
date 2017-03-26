import BaseControler from '../../../core/controller/Base'
import UserService from '../../../services/UserService'

/**
 * UserController.js
 *
 */
class UserController extends BaseControler {
  constructor (args) {
    super(args)
    if (!this.UserService) {
      this.UserService = new UserService()
    }
  }
  ip () {
    return super.ip()
  }
  async getAll () {
    this.http.res.send(await this.UserService.getAll())
  }
}

module.exports = UserController
