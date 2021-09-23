const Joi = require('joi')
exports.createUserValidation = Joi.object({
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
  user_role: Joi.string().required(),
  image_url: Joi.string().required()
}).with('user_password', 'user_repeat_password')

exports.loginValidation = Joi.object({
  user_email: Joi.string()
    .email()
    .required(),
  user_password: Joi.required()
})
// module.exports = Schema
