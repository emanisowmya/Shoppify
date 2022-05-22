module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    manufacterer: {
      type: Sequelize.STRING,
    },
    itemnumber: {
      type: Sequelize.INTEGER,
    },
    buyer: {
      type: Sequelize.STRING,
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
  });
  return Cart;
};
