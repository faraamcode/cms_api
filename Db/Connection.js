const sequelize = require('sequelize')
const database = new sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

database
  .authenticate()
  .then(() => console.log('connected'))
  .catch(err => console.log('not connected'))
module.exports = database
