const express = require('express')
const {
  getAllCalendar,
  postCalendar,
  updateCalendar,
  deleteCalendar
} = require('./Calendar.Controller')

const router = express.Router()

router.get('/Calendar', getAllCalendar)
router.post('/Calendar', postCalendar)
router.patch('/Calendar/update/:id', updateCalendar)
router.delete('/Calendar/delete/:id', deleteCalendar)
module.exports = router
