const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const ContactModel = database.define('Contact', {
  Contact_type: DataTypes.STRING,
  Contact_details: DataTypes.STRING
})

ContactModel.sync()
  .then(() => console.log('Contact table crated'))
  .catch(err => console.log(err))

module.exports = ContactModel
