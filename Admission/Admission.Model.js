const database = require('../Db/Connection')
const { DataTypes } = require('sequelize')
const AdmissionModel = database.define('admission', {
  parent_fullname: DataTypes.STRING,
  parent_phone_number: DataTypes.STRING,
  parent_whatsaap: DataTypes.STRING,
  parent_email: DataTypes.STRING,
  parent_instagram: DataTypes.STRING,
  parent_address: DataTypes.STRING,
  parent_occupation: DataTypes.STRING,
  student_surname: DataTypes.STRING,
  student_other_names: DataTypes.STRING,
  student_DOB: DataTypes.STRING,
  student_gender: DataTypes.STRING,
  student_address: DataTypes.STRING,
  student_proposed_class: DataTypes.STRING,
  student_admission_option: DataTypes.STRING,
  student_present_school: DataTypes.STRING,
  student_present_class: DataTypes.STRING,
  student_present_admission_type: DataTypes.STRING,
  image_url: DataTypes.STRING
})

AdmissionModel.sync()
  .then(() => console.log('admission table crated'))
  .catch(err => console.log(err))

module.exports = AdmissionModel
