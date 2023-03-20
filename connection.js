const {Sequelize , DataTypes} = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize('excelFile', 'root', PROCESS.ENV.PASSWORD, {  
    dialect: 'mysql',
    logging: false
})  

const Book = require('./models/book')(sequelize, DataTypes)
sequelize.sync({alter: true})
module.exports = {Book}