const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  createUser,
  getAllUsers,
  userLogin,
  getUserProfile
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
router.post('/login', userLogin)
// router.patch('/about/update/:id', updateAbout)
// router.get('/user/profile/update', verifyUser, getAllUsers)
// router.delete('/about/delete/:id', deleteAbout)
module.exports = router
