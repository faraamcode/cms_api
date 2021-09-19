const express = require('express')
const ContactModel = require('./Contact.Model')
const Schema = require('./Contact.Validation')
exports.getAllContact = async (req, res, next) => {
  try {
    const ContactData = await ContactModel.findAll()
    res.status(200).json(ContactData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}

exports.postContact = async (req, res, next) => {
  try {
    const value = await Schema.validateAsync(req.body)
    try {
      const savingResponse = await ContactModel.create(value)
      res.status(200).json({
        message: 'Contact saved successfully',
        value: savingResponse.dataValues
      })
    } catch (error) {
      res.status(401).json({ message: 'server error' })
    }
  } catch (error) {
    const { message, path } = error.details[0]
    const errorValue = { [path]: message }
    res.status(422).json(errorValue)
  }
}

exports.updateContact = async (req, res, next) => {
  const id = req.param('id')
  if (!id) {
    res.status(422).json({ message: 'id is required' })
  } else {
    try {
      const updateResponse = await ContactModel.update(req.body, {
        where: {
          id
        }
      })
      if (updateResponse[0] > 0) {
        res.status(200).json({ message: 'updated successfully' })
      } else {
        res.status(400).json({ message: 'update not successful' })
      }
    } catch (error) {
      res.status(422).json({ message: 'id not available' })
    }
  }
}
exports.deleteContact = async (req, res, next) => {
  const id = req.param('id')

  if (id) {
    try {
      const deleteResponse = await ContactModel.destroy({
        where: {
          id
        }
      })
      if (deleteResponse) {
        res.status(200).json({ message: 'deleted successfully' })
      } else {
        res.status(400).json({ message: 'id not available' })
      }
    } catch (error) {
      res.status(400).json({ message: 'delete not successful' })
    }
  } else {
    res.status(422).json({ message: 'id is required' })
  }
}
