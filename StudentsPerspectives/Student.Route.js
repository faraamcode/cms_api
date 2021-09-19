const express = require('express')
const {
  getAllStudentPerspective,
  postStudentPerspective,
  updateStudentPerspective,
  deleteStudentPerspective
} = require('./Student.Controller')

const router = express.Router()

router.get('/StudentPerspective', getAllStudentPerspective)
router.post('/StudentPerspective', postStudentPerspective)
router.patch('/StudentPerspective/update/:id', updateStudentPerspective)
router.delete('/StudentPerspective/delete/:id', deleteStudentPerspective)
module.exports = router
