const express = require('express')
const {
  getAllEvent,
  postEvent,
  updateEvent,
  deleteEvent
} = require('./Event.Controller')

const router = express.Router()

router.get('/Event', getAllEvent)
router.post('/Event', postEvent)
router.patch('/Event/update/:id', updateEvent)
router.delete('/Event/delete/:id', deleteEvent)
module.exports = router
