module.exports = {
  database: process.env.DB_DB,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  options: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    define: {
      timestamps: false
    },
    timezone: '+08:00',
    logging: true
  }
}
