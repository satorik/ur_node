import  Sequelize from 'sequelize'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    useUTC: false,
  },
  schema:process.env.DB_SCHEMA,
  logging: false //console.log
})

  const models = {
    User: sequelize.import('./user.js')
  }
  
 export { models, sequelize as default }


