const express = require('express')
const {
  getAllNews,
  postNews,
  updateNews,
  deleteNews
} = require('./News.Controller')

const router = express.Router()

router.get('/News', getAllNews)
router.post('/News', postNews)
router.patch('/News/update/:id', updateNews)
router.delete('/News/delete/:id', deleteNews)
module.exports = router
