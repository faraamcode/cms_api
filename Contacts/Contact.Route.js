const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  getAllContact,
  postContact,
  updateContact,
  deleteContact
} = require('./Contact.Controller')

const router = express.Router()

router.get('/Contact', verifyUser, getAllContact)
router.post('/Contact', verifyUser, postContact)
router.patch('/Contact/update/:id', verifyUser, updateContact)
router.delete('/Contact/delete/:id', verifyAdmin, deleteContact)
module.exports = router
