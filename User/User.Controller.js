const express = require('express')
const UserModel = require('./User.Model')
const Schema = require('./User.Validation')
const { loginValidation } = require('./User.Validation')
const bcryptjs = require('bcryptjs')
exports.getAllUsers = async (req, res, next) => {
  try {
    const userData = await UserModel.findAll()
    res.status(200).json(userData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}
exports.userLogin = async (req, res, next) => {
  try {
    const value = await loginValidation.validateAsync(req.body)
    try {
      const { user_email, user_password } = value
      const userData = await UserModel.findOne({
        where: {
          user_email
        }
      })
      if (!userData) {
        res.status(401).json({
          message: 'user not found or incorrect email'
        })
      }
      const checkUser = await bcryptjs.compare(
        user_password,
        userData.dataValues['user_password']
      )
      if (!checkUser) {
        res.status(401).json({
          message: 'invalid password'
        })
      }
      res.status(200).json({
        message: 'login successfully'
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: 'server error occurred' })
    }
  } catch (error) {
    const { message, path } = error.details[0]
    const errorValue = { [path]: message }
    res.status(422).json(errorValue)
  }
}

exports.createUser = async (req, res, next) => {
  try {
    const value = await Schema.validateAsync(req.body)
    const { user_password } = value
    const hashedPassword = await bcryptjs.hash(user_password, 10)
    const userData = { ...value, user_password: hashedPassword }
    console.log(userData)
    try {
      const savingResponse = await UserModel.create(userData)
      res.status(200).json({
        message: 'user saved successfully'
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

// exports.updateAbout = async (req, res, next) => {
//   const id = req.param('id')
//   if (!id) {
//     res.status(422).json({ message: 'id is required' })
//   } else {
//     try {
//       const updateResponse = await AboutModel.update(req.body, {
//         where: {
//           id
//         }
//       })
//       if (updateResponse[0] > 0) {
//         res.status(200).json({ message: 'updated successfully' })
//       } else {
//         res.status(400).json({ message: 'update not successful' })
//       }
//     } catch (error) {
//       res.status(422).json({ message: 'id not available' })
//     }
//   }
// }
// exports.deleteAbout = async (req, res, next) => {
//   const id = req.param('id')

//   if (id) {
//     try {
//       const deleteResponse = await AboutModel.destroy({
//         where: {
//           id
//         }
//       })
//       if (deleteResponse) {
//         res.status(200).json({ message: 'deleted successfully' })
//       } else {
//         res.status(400).json({ message: 'id not available' })
//       }
//     } catch (error) {
//       res.status(400).json({ message: 'delete not successful' })
//     }
//   } else {
//     res.status(422).json({ message: 'id is required' })
//   }
// }
