const express = require('express')
const jwt = require('jsonwebtoken')

exports.verifyUser = async (req, res, next) => {
  const userToken = req.headers.authorization
  jwt.verify(userToken, process.env.PRIV_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: 'user unauthorized'
      })
    }

    if (decoded) {
      req.user = decoded
      next()
    }
  })
}
exports.verifyAdmin = async (req, res, next) => {
  const userToken = req.headers.authorization
  jwt.verify(userToken, process.env.PRIV_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: 'user unauthorized'
      })
    }
    if (decoded) {
      if (decoded.role === 'admin') {
        req.user = decoded
        next()
      } else if (decoded.role !== 'admin') {
        res.status(401).json({
          message: 'user not authorized'
        })
      }
    }
  })
}
