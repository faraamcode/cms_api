const { DataTypes } = require('sequelize')
const database = require('../Db/Connection')

const HeroModel = database.define('hero', {
  hero_title: DataTypes.STRING,
  hero_info: DataTypes.STRING,
  image_url: DataTypes.STRING
})

HeroModel.sync()
  .then(() => console.log('hero table crated'))
  .catch(err => console.log(err))

module.exports = HeroModel
