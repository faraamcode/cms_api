const express = require('express')
const EventModel = require('./Event.Model')
const { id } = require('./Event.Validation')
const Schema = require('./Event.Validation')
exports.getAllEvent = async (req, res, next) => {
  try {
    const EventData = await EventModel.findAll()
    res.status(200).json(EventData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}

exports.postEvent = async (req, res, next) => {
  try {
    const value = await Schema.validateAsync(req.body)
    try {
      const savingResponse = await EventModel.create(value)
      res.status(200).json({
        message: 'Event saved successfully',
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

exports.updateEvent = async (req, res, next) => {
  const id = req.param('id')
  if (!id) {
    res.status(422).json({ message: 'id is required' })
  } else {
    try {
      const updateResponse = await EventModel.update(req.body, {
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
exports.deleteEvent = async (req, res, next) => {
  const id = req.param('id')

  if (id) {
    try {
      const deleteResponse = await EventModel.destroy({
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
