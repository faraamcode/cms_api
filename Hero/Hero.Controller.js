const express = require('express')
const HeroModel = require('./Hero.Model')
const { id } = require('./Hero.Validation')
const Schema = require('./Hero.Validation')
exports.getAllHeroes = async (req, res, next) => {
  try {
    const HeroData = await HeroModel.findAll()
    res.status(200).json(HeroData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}

exports.postHeroes = async (req, res, next) => {
  try {
    const value = await Schema.validateAsync(req.body)
    try {
      const savingResponse = await HeroModel.create(value)
      res.status(200).json({
        message: 'Hero saved successfully',
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

exports.updateHero = async (req, res, next) => {
  const id = req.param('id')

  if (id) {
    try {
      const updateResponse = await HeroModel.update(req.body, {
        where: {
          id
        }
      })
      if (updateResponse) {
        res.status(200).json({ message: 'updated successfully' })
      }
    } catch (error) {
      res.status(400).json({ message: 'update not successful' })
    }
  } else {
    res.status(422).json({ message: 'id is required' })
  }
}
