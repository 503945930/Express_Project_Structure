module.exports = {
  appenders: [ // 日志
    {
      type: 'console'
    }, // 控制台输出
    {
      type: 'file',
      filename: 'logs/http.log',
      maxLogSize: 20480,
      backups: 3,
      category: 'http'
    },
    {
      type: 'file',
      filename: 'logs/init.log',
      maxLogSize: 20480,
      backups: 3,
      category: 'init'
    },
    {
      type: 'file',
      filename: 'logs/mysql.log',
      maxLogSize: 20480,
      backups: 3,
      category: 'mysql'
    },
    {
      type: 'file',
      filename: 'logs/userController.log',
      maxLogSize: 20480,
      backups: 3,
      category: 'userController'
    }
  ]
}
