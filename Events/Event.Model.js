const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const EventModel = database.define('Event', {
  Event_title: {
    type: DataTypes.STRING,
    get () {
      const dbValue = this.getDataValue('Event_title')
      return dbValue ? dbValue.toUpperCase() : null
    }
  },
  Event_info: DataTypes.STRING,
  Event_time_duration: DataTypes.STRING,
  Event_venue: DataTypes.STRING,
  Event_day: DataTypes.STRING,
  Event_month: DataTypes.STRING,
  Event_year: DataTypes.STRING,
  image_url: DataTypes.STRING
})

EventModel.sync()
  .then(() => console.log('Event table crated'))
  .catch(err => console.log(err))

module.exports = EventModel
