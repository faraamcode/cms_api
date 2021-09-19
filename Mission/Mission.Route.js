const express = require('express')
const {
  getAllMission,
  postMission,
  updateMission,
  deleteMission
} = require('./Mission.Controller')

const router = express.Router()

router.get('/Mission', getAllMission)
router.post('/Mission', postMission)
router.patch('/Mission/update/:id', updateMission)
router.delete('/Mission/delete/:id', deleteMission)
module.exports = router
