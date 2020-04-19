import  Sequelize from 'sequelize'
import configuration from '../config'

const env = process.env.NODE_ENV || 'development'
const config = configuration[env]

const sequelize = new Sequelize(config.database.db, config.database.user, config.database.password, {
  host: config.database.host,
  dialect: 'postgres',
  dialectOptions: {
    useUTC: false,
  },
  schema: config.database.schema,
  logging: false //console.log
})

  const models = {
    fandom: sequelize.import('./masterData/fandom.js'),
    character: sequelize.import('./masterData/character.js'),
    genre: sequelize.import('./masterData/genre.js'),
    location: sequelize.import('./masterData/location.js'),
    raiting: sequelize.import('./masterData/raiting.js'),
    trop: sequelize.import('./masterData/trop.js'),
    noun: sequelize.import('./masterData/noun.js'),

    game: sequelize.import('./game/game.js'),
    gameCondition: sequelize.import('./game/gameCondition.js'),

    status: sequelize.import('./config/status.js')
  }
  
  models.fandom.hasMany(models.character, { onDelete: 'cascade' })
  models.fandom.hasMany(models.location, { onDelete: 'cascade' })

  models.game.hasMany(models.gameCondition, {as: 'Conditions'})

 export { models, sequelize as default }


