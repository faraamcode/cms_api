const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const AboutModel = database.define('about', {
  about_title: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('about_title')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  about_info: DataTypes.STRING,
  image_url: DataTypes.STRING
})

AboutModel.sync()
  .then(() => console.log('about table crated'))
  .catch(err => console.log(err))

module.exports = AboutModel
