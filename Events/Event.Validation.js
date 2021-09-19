const Joi = require('joi')
const Schema = Joi.object({
  Event_title: Joi.string().required(),
  Event_info: Joi.string().required(),
  image_url: Joi.string().required(),
  Event_time_duration: Joi.string().required(),
  Event_venue: Joi.string().required(),
  Event_day: Joi.string().required(),
  Event_month: Joi.string().required(),
  Event_year: Joi.string().required()
})

module.exports = Schema
