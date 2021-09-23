const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const userModel = database.define('user', {
  user_surname: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('user_surname')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  user_other_names: DataTypes.STRING,
  user_email: DataTypes.STRING,
  user_gender: DataTypes.STRING,
  user_password: DataTypes.STRING,
  user_token: DataTypes.STRING,
  user_role: DataTypes.STRING,
  image_url: DataTypes.STRING
})

userModel
  .sync()
  .then(() => console.log('user table crated'))
  .catch(err => console.log(err))

module.exports = userModel
