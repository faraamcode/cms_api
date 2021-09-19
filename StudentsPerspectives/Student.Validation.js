const Joi = require('joi')
const Schema = Joi.object({
  Student_pers_title: Joi.string().required(),
  Student_pers_name: Joi.string().required(),
  Student_pers_info: Joi.string()
    .required()
    .min(4),
  image_url: Joi.string().required()
})

module.exports = Schema
