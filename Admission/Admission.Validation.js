const Joi = require('joi')
const Schema = Joi.object({
  parent_fullname: Joi.string().required(),
  parent_phone_number: Joi.string().required(),
  parent_whatsaap: Joi.string().required(),
  parent_email: Joi.string().required(),
  parent_instagram: Joi.string().required(),
  parent_address: Joi.string().required(),
  parent_occupation: Joi.string().required(),
  student_surname: Joi.string().required(),
  student_other_names: Joi.string().required(),
  student_DOB: Joi.string().required(),
  student_gender: Joi.string().required(),
  student_address: Joi.string().required(),
  student_proposed_class: Joi.string().required(),
  student_admission_option: Joi.string().required(),
  student_present_school: Joi.string().required(),
  student_present_class: Joi.string().required(),
  student_present_admission_type: Joi.string().required(),
  image_url: Joi.string().required()
})

module.exports = Schema
