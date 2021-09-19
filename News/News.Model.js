const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const NewsModel = database.define('News', {
  News_title: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('News_title')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  News_info: DataTypes.STRING,
  image_url: DataTypes.STRING
})

NewsModel.sync()
  .then(() => console.log('News table crated'))
  .catch(err => console.log(err))

module.exports = NewsModel
