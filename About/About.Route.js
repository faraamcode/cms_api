const express = require('express')
const {
  getAllAbout,
  postAbout,
  updateAbout,
  deleteAbout
} = require('./About.Controller')

const router = express.Router()

router.get('/about', getAllAbout)
router.post('/about', postAbout)
router.patch('/about/update/:id', updateAbout)
router.delete('/about/delete/:id', deleteAbout)
module.exports = router
