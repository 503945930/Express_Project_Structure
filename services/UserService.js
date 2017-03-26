import sequelize from 'sequelize'

class UserService {
  constructor (...args) {
    this.User = sequelize.models.User
  }
  getAll () {
    return this.User.find()
  }
}

export default UserService
