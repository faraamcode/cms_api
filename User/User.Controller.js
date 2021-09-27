const express = require('express')
const UserModel = require('./User.Model')
const jwt = require('jsonwebtoken')
const Schema = require('./User.Validation')
const { loginValidation } = require('./User.Validation')
const { createUserValidation } = require('./User.Validation')
const bcryptjs = require('bcryptjs')
const nodemailer = require('nodemailer')
exports.getUserProfile = async (req, res, next) => {
  const userEmail = req.user.email
  try {
    const userData = await UserModel.findOne({
      where: {
        user_email: userEmail
      }
    })
    res.status(200).json(userData)
  } catch (error) {
    res.status(400).json({ message: 'server error occurred' })
  }
}
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

      try {
        const checkUser = await bcryptjs.compare(
          user_password,
          userData.dataValues['user_password']
        )

        if (!checkUser) {
          res.status(401).json({
            message: 'invalid password'
          })
        }
        const userPayload = {
          email: userData['user_email'],
          role: userData['user_role']
        }
        jwt.sign(userPayload, process.env.PRIV_KEY, (err, token) => {
          console.log(err)
          res.status(200).json({
            message: 'login successfully',
            token
          })
        })

        // const verify = jwt.verify(
        //   token,
        //   process.env.PRIV_KEY,
        //   (err, payload) => {
        //     if (err) {
        //       console.log(err)
        //     }
        //     console.log(payload)
        //   }
        // )
      } catch (error) {
        res.status(400).json({ message: 'server error occurred' })
      }
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
    const value = await createUserValidation.validateAsync(req.body)
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

exports.changePasswordRequest = async (req, res, next) => {
  const email = req.body.user_email

  console.log(email)

  let transporter = nodemailer.createTransport({
    host: 'mail.roemichsschools.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '', // generated ethereal user
      pass: '' // generated ethereal password
    }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: ' "', // sender address
    to: 'abdulrasaqalagbede@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
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
