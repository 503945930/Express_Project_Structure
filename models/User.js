module.exports = function (sequelize, DataTypes) {
  let Model = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      comment: '名称'
    }
  }, {
    tableName: 'yy_Operator',
    classMethods: {
      associate: function (models) {

      }
    }
  })

  return Model
}
