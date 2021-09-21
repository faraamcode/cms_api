const express = require('express')
const { createUser, getAllUsers } = require('./User.Controller')

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

router.get('/user', getAllUsers)
router.post('/user', createUser)
// router.patch('/about/update/:id', updateAbout)
// router.delete('/about/delete/:id', deleteAbout)
module.exports = router
