const express = require('express')
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

router.get('/about', getAllAbout)
router.post('/about', postAbout)
router.patch('/about/update/:id', updateAbout)
router.delete('/about/delete/:id', deleteAbout)
module.exports = router
