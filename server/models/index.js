const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize( // instance 1
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,

        }
    }
)

//  authenticate the sequelize
sequelize.authenticate()
.then(() => {
    console.log("connected...")
})
.catch(err => {
    console.log("Error: ", err)
})

const db = {};

// create a instance of Sequalize library
db.sequelize = Sequelize; 

// create a instance of instance 1
db.sequelize = sequelize;

// configure the tablename
db.users = require('./userModels')(sequelize, DataTypes);

// if force = true everytime when we run the server we will lose our data as it will recreate table each time.
db.sequelize.sync({ force: false })
.then(() => {
    console.log('re-sync done!');
})


module.exports = db;