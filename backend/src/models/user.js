User.associate = (models) => {
  User.hasMany(models.Product, { foreignKey: 'userId', onDelete: 'CASCADE' });
  User.hasMany(models.Order, { foreignKey: 'buyerId', onDelete: 'CASCADE' });
};
