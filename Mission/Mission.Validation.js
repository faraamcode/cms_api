const Joi = require('joi')
const Schema = Joi.object({
  Mission_title: Joi.string().required(),
  Mission_info: Joi.string().required(),
  image_url: Joi.string().required()
})

module.exports = Schema
