const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  createUser,
  getAllUsers,
  userLogin,
  getUserProfile,
  changePasswordRequest
} = require('./User.Controller')

const router = express.Router()
/**
 * @swagger
 * /about:
 *  get:
 *    description: use to request all customers
 *    responses :
 *       '200' :
 *        description: A successful response
 */

router.get('/user/profile', verifyUser, getUserProfile)
router.get('/user', verifyAdmin, getAllUsers)
router.post('/user', verifyAdmin, createUser)
router.post('/user/login', userLogin)
router.post('/user/password/reset', changePasswordRequest)
// router.get('/user/profile/update', verifyUser, getAllUsers)
// router.delete('/about/delete/:id', deleteAbout)
module.exports = router
