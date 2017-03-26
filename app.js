const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config(); // eslint-disable-line
const log4js = require('log4js')
const cors = require('cors')
const methodOverride = require('method-override')
const router = require('./core/registerRouters')

const app = express()
const bootstrap = require('./config/bootstrap')
// load config
bootstrap.init(app)
// log config
log4js.configure(app.airConfig.get('log'))
const logger = log4js.getLogger('http')
logger.setLevel('INFO')

app.use(cors(app.airConfig.get('cors')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
// 中间件，记录所有请求
app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO}))
// 此中间件可以模拟PUT、DELETE等http操作（express4.x中已经不再集成，如果将express升级到4.x需要安装并手动引入）
app.use(methodOverride())

router.register(app)

// 所有路由都未匹配（404）
app.use('*', function (req, res) {
  return res.sendStatus(404)
})

module.exports = app
