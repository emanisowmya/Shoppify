module.exports = (sequelize, Sequelize) => {
  const Seller = sequelize.define("seller", {
    email: {
      type: Sequelize.STRING,
    },
    money: {
      type: Sequelize.INTEGER,
    },
    sellerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return Seller;
};
