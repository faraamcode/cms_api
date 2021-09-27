const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  getAllAdmission,
  postAdmission,
  updateAdmission,
  deleteAdmission
} = require('./Admission.Controller')

const router = express.Router()

router.get('/admission', verifyUser, getAllAdmission)
router.post('/admission', verifyUser, postAdmission)
router.patch('/admission/update/:id', verifyUser, updateAdmission)
router.delete('/admission/delete/:id', verifyAdmin, deleteAdmission)
module.exports = router
