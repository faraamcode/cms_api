const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const GalleryModel = database.define('Gallery', {
  Gallery_title: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('Gallery_title')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  Gallery_info: DataTypes.STRING,
  image_url: DataTypes.STRING
})

GalleryModel.sync()
  .then(() => console.log('Gallery table created'))
  .catch(err => console.log(err))

module.exports = GalleryModel
