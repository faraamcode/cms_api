const express = require('express')
const CalendarModel = require('./Calendar.Model')
const { id } = require('./Calendar.Validation')
const Schema = require('./Calendar.Validation')
exports.getAllCalendar = async (req, res, next) => {
  try {
    const CalendarData = await CalendarModel.findAll()
    res.status(200).json(CalendarData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}

exports.postCalendar = async (req, res, next) => {
  try {
    const value = await Schema.validateAsync(req.body)
    try {
      const savingResponse = await CalendarModel.create(value)
      res.status(200).json({
        message: 'Calendar saved successfully',
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

exports.updateCalendar = async (req, res, next) => {
  const id = req.param('id')
  if (!id) {
    res.status(422).json({ message: 'id is required' })
  } else {
    try {
      const updateResponse = await CalendarModel.update(req.body, {
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
exports.deleteCalendar = async (req, res, next) => {
  const id = req.param('id')

  if (id) {
    try {
      const deleteResponse = await CalendarModel.destroy({
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
