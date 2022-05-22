module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    itemnumber: {
      type: Sequelize.INTEGER,
    },
    buyerid: {
      type: Sequelize.INTEGER,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    sellerid: {
      type: Sequelize.INTEGER,
    },
    itemname: {
      type: Sequelize.STRING,
    },
    itemtype: {
      type: Sequelize.STRING,
    },
    index: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    finallocation: {
      type: Sequelize.STRING,
    },
  });
  return Order;
};
