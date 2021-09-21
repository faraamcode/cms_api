const Joi = require('joi')
const Schema = Joi.object({
  user_surname: Joi.string()
    .required()
    .min(4),
  user_other_names: Joi.string().required(),
  user_email: Joi.string()
    .email()
    .required(),
  user_gender: Joi.string().required(),
  user_password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  user_repeat_password: Joi.ref('user_password'),
  user_token: Joi.string().required(),
  image_url: Joi.string().required()
}).with('user_password', 'user_repeat_password')

module.exports = Schema
