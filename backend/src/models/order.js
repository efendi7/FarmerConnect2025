Order.associate = (models) => {
  Order.belongsTo(models.User, { foreignKey: 'buyerId' });
  Order.belongsTo(models.Product, { foreignKey: 'productId' });
};
