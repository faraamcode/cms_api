const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  getAllCalendar,
  postCalendar,
  updateCalendar,
  deleteCalendar
} = require('./Calendar.Controller')

const router = express.Router()

router.get('/Calendar', verifyUser, getAllCalendar)
router.post('/Calendar', verifyUser, postCalendar)
router.patch('/Calendar/update/:id', verifyUser, updateCalendar)
router.delete('/Calendar/delete/:id', verifyAdmin, deleteCalendar)
module.exports = router
