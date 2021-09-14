const Joi = require('joi')
const Schema = Joi.object({
  hero_title: Joi.string()
    .required()
    .min(4)
    .max(20),
  hero_info: Joi.string()
    .required()
    .min(4)
    .max(50),
  image_url: Joi.string().required()
})

module.exports = Schema
