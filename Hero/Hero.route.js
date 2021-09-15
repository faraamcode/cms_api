const express = require('express')
const {
  getAllHeroes,
  postHeroes,
  updateHero,
  deleteHero
} = require('./Hero.Controller')

const router = express.Router()

router.get('/hero', getAllHeroes)
router.post('/hero', postHeroes)
router.patch('/hero/update/:id', updateHero)
router.delete('/hero/delete/:id', deleteHero)
module.exports = router
