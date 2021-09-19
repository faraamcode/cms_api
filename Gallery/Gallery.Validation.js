const Joi = require('joi')
const Schema = Joi.object({
  Gallery_title: Joi.string()
    .required()
    .min(4)
    .max(20),
  Gallery_info: Joi.string()
    .required()
    .min(4),
  image_url: Joi.string().required()
})

module.exports = Schema
