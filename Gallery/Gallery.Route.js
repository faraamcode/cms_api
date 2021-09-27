const express = require('express')
const { verifyUser, verifyAdmin } = require('../MIddlewares')
const {
  getAllGallery,
  postGallery,
  updateGallery,
  deleteGallery
} = require('./Gallery.Controller')

const router = express.Router()

router.get('/Gallery', verifyUser, getAllGallery)
router.post('/Gallery', verifyUser, postGallery)
router.patch('/Gallery/update/:id', verifyUser, updateGallery)
router.delete('/Gallery/delete/:id', verifyAdmin, deleteGallery)
module.exports = router
