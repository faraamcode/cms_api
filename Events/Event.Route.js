const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  getAllEvent,
  postEvent,
  updateEvent,
  deleteEvent
} = require('./Event.Controller')

const router = express.Router()

router.get('/Event', verifyUser, getAllEvent)
router.post('/Event', verifyUser, postEvent)
router.patch('/Event/update/:id', verifyUser, updateEvent)
router.delete('/Event/delete/:id', verifyAdmin, deleteEvent)
module.exports = router
