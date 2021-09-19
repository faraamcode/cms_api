const Joi = require('joi')
const Schema = Joi.object({
  Contact_type: Joi.string().required(),
  Contact_details: Joi.string().required()
})

module.exports = Schema
