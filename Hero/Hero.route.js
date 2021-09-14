const express = require('express')
const { getAllHeroes, postHeroes, updateHero } = require('./Hero.Controller')

const router = express.Router()

router.get('/hero', getAllHeroes)
router.post('/hero', postHeroes)
router.patch('/hero/update/:id', updateHero)
module.exports = router
