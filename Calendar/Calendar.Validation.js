const Joi = require('joi')
const Schema = Joi.object({
  Calendar_session: Joi.string().required(),
  Calendar_term: Joi.string().required(),
  calender_week: Joi.string().required(),
  calender_duration: Joi.string().required(),
  calender_info: Joi.string().required()
})

module.exports = Schema
