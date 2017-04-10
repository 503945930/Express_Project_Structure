  module.exports = {
    app: {
      host: '0.0.0.0',
      port: '4000',
      apiPrefix: process.env.API_PREFIX
    },
    role: {
      'bd-admin': 4,
      'bd-regional-manager': 3,
      'bd-city-manager': 2,
      'bd': 1
    },
    // 内部接口请求地址
    internalApi: 'http://staging-yedian.chinacloudapp.cn:3003',
     // 请求发送信息地址
    smsApi: 'http://staging-api.chinacloudapp.cn'
  }
