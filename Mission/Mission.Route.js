const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  getAllMission,
  postMission,
  updateMission,
  deleteMission
} = require('./Mission.Controller')

const router = express.Router()

router.get('/Mission', verifyUser, getAllMission)
router.post('/Mission', verifyAdmin, postMission)
router.patch('/Mission/update/:id', verifyAdmin, updateMission)
router.delete('/Mission/delete/:id', verifyAdmin, deleteMission)
module.exports = router
