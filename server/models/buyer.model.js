module.exports = (sequelize, Sequelize) => {
  const Buyer = sequelize.define("buyer", {
    email: {
      type: Sequelize.STRING,
    },
    money: {
      type: Sequelize.INTEGER,
    },
    buyerId: {
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
  return Buyer;
};
