const express = require('express')
const StudentPerspectiveModel = require('./Student.Model')
const Schema = require('./Student.Validation')
exports.getAllStudentPerspective = async (req, res, next) => {
  try {
    const StudentPerspectiveData = await StudentPerspectiveModel.findAll()
    res.status(200).json(StudentPerspectiveData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}

exports.postStudentPerspective = async (req, res, next) => {
  try {
    const value = await Schema.validateAsync(req.body)
    try {
      const savingResponse = await StudentPerspectiveModel.create(value)
      res.status(200).json({
        message: 'StudentPerspective saved successfully',
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

exports.updateStudentPerspective = async (req, res, next) => {
  const id = req.param('id')
  if (!id) {
    res.status(422).json({ message: 'id is required' })
  } else {
    try {
      const updateResponse = await StudentPerspectiveModel.update(req.body, {
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
exports.deleteStudentPerspective = async (req, res, next) => {
  const id = req.param('id')

  if (id) {
    try {
      const deleteResponse = await StudentPerspectiveModel.destroy({
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
