const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const StudentPerspectiveModel = database.define('Student_perspective', {
  Student_perspective_name: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('Student_perspective_name')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  Student_perspective_title: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('Student_perspective_title')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  Student_perspective_info: DataTypes.STRING,
  image_url: DataTypes.STRING
})

StudentPerspectiveModel.sync()
  .then(() => console.log('Student_perspective table crated'))
  .catch(err => console.log(err))

module.exports = StudentPerspectiveModel
