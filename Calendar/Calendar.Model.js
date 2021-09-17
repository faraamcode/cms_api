const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const CalendarModel = database.define('Calendar', {
  Calendar_session: DataTypes.STRING,
  Calendar_term: DataTypes.STRING,
  calender_week: DataTypes.STRING,
  calender_duration: DataTypes.STRING,
  calender_info: DataTypes.STRING
})

CalendarModel.sync()
  .then(() => console.log('Calendar table crated'))
  .catch(err => console.log(err))

module.exports = CalendarModel
