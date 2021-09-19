const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const MissionModel = database.define('Mission', {
  Mission_title: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('Mission_title')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  Mission_info: DataTypes.STRING,
  image_url: DataTypes.STRING
})

MissionModel.sync()
  .then(() => console.log('Mission table crated'))
  .catch(err => console.log(err))

module.exports = MissionModel
