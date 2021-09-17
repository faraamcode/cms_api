const express = require('express')
const {
  getAllAdmission,
  postAdmission,
  updateAdmission,
  deleteAdmission
} = require('./Admission.Controller')

const router = express.Router()

router.get('/admission', getAllAdmission)
router.post('/admission', postAdmission)
router.patch('/admission/update/:id', updateAdmission)
router.delete('/admission/delete/:id', deleteAdmission)
module.exports = router
