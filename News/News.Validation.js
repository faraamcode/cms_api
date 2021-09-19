const Joi = require('joi')
const Schema = Joi.object({
  News_title: Joi.string()
    .required()
    .min(4)
    .max(20),
  News_info: Joi.string()
    .required()
    .min(4),
  image_url: Joi.string().required()
})

module.exports = Schema
