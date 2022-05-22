const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  define: {
    timestamps: false,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.cart = require("./cart.model.js")(sequelize, Sequelize);
db.seller = require("./seller.model.js")(sequelize, Sequelize);
db.buyer = require("./buyer.model.js")(sequelize, Sequelize);
db.ordr = require("./order.model.js")(sequelize, Sequelize);
module.exports = db;
