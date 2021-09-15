const express = require('express')
const AboutModel = require('./About.Model')
const Schema = require('./About.Validation')
exports.getAllAbout = async (req, res, next) => {
  try {
    const AboutData = await AboutModel.findAll()
    res.status(200).json(AboutData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}

exports.postAbout = async (req, res, next) => {
  try {
    const value = await Schema.validateAsync(req.body)
    try {
      const savingResponse = await AboutModel.create(value)
      res.status(200).json({
        message: 'about saved successfully',
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

exports.updateAbout = async (req, res, next) => {
  const id = req.param('id')
  console.log(id)
  if (!id) {
    res.status(422).json({ message: 'id is required' })
  } else {
    try {
      const updateResponse = await AboutModel.update(req.body, {
        where: {
          id
        }
      })
      console.log(updateResponse)
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
exports.deleteAbout = async (req, res, next) => {
  const id = req.param('id')

  if (id) {
    try {
      const deleteResponse = await AboutModel.destroy({
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
