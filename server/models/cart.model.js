module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    manufacterer: {
      type: Sequelize.STRING,
    },
    item_number: {
      type: Sequelize.INTEGER,
    },
    buyer: {
      type: Sequelize.STRING,
    },
    item_name: {
      type: Sequelize.STRING,
    },
    item_type: {
      type: Sequelize.STRING,
    },
    index: {
      type: Sequelize.STRING,
    },
  });
  return Cart;
};
