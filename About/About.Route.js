const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  getAllAbout,
  postAbout,
  updateAbout,
  deleteAbout
} = require('./About.Controller')

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

router.get('/about', verifyUser, getAllAbout)
router.post('/about', verifyUser, postAbout)
router.patch('/about/update/:id', verifyUser, updateAbout)
router.delete('/about/delete/:id', verifyAdmin, deleteAbout)
module.exports = router
