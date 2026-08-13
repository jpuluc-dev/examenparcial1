const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//db.archivo de modelo = require("./algo.model.js")(sequelize, Sequelize);
module.exports = db; 