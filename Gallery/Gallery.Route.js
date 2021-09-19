const express = require('express')
const {
  getAllGallery,
  postGallery,
  updateGallery,
  deleteGallery
} = require('./Gallery.Controller')

const router = express.Router()

router.get('/Gallery', getAllGallery)
router.post('/Gallery', postGallery)
router.patch('/Gallery/update/:id', updateGallery)
router.delete('/Gallery/delete/:id', deleteGallery)
module.exports = router
