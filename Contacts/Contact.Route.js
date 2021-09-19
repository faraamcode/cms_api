const express = require('express')
const {
  getAllContact,
  postContact,
  updateContact,
  deleteContact
} = require('./Contact.Controller')

const router = express.Router()

router.get('/Contact', getAllContact)
router.post('/Contact', postContact)
router.patch('/Contact/update/:id', updateContact)
router.delete('/Contact/delete/:id', deleteContact)
module.exports = router
