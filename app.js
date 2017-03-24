const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const log4js = require('log4js')
const cors = require('cors')
const dotenv = require('dotenv').config(); // eslint-disable-line
const config = require('config')
const methodOverride = require('method-override')
const APIOutputMiddleware = require('./middleware/APIOutputMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')
const app = express()
const sequelize = require('./lib/models')()

log4js.configure(config.get('log'))
const logger = log4js.getLogger('http')
logger.setLevel('INFO')

app.use(cors({
  origin: true,
  credentials: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
// 中间件，记录所有请求
app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO}))
// 此中间件可以模拟PUT、DELETE等http操作（express4.x中已经不再集成，如果将express升级到4.x需要安装并手动引入）
app.use(methodOverride())

app.use(APIOutputMiddleware)
app.use(roleMiddleware)

  // 路由信息
//app.use(urlrouter(routes))

// 所有路由都未匹配（404）
.app.get('*', function (req, res) {
  return res.sendStatus(404)
})
app.post('*', function (req, res) {
  return res.sendStatus(404)
})
app.put('*', function (req, res) {
  return res.sendStatus(404)
})
app.delete('*', function (req, res) {
  return res.sendStatus(404)
})

app.listen(config.app.port, () => {
  logger.info(`服务器启动，端口:${config.app.port}`)
})

module.exports = app
