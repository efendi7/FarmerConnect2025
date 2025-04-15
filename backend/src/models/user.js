const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Pastikan Anda mengimpor konfigurasi database

const User = sequelize.define(
  'User',
  {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: true, // Untuk createdAt dan updatedAt
    underscored: true, // Menggunakan snake_case untuk kolom, seperti created_at
  }
);

// Menambahkan Relasi
User.associate = (models) => {
  // Relasi dengan tabel Product
  User.hasMany(models.Product, { foreignKey: 'userId', onDelete: 'CASCADE' });

  // Relasi dengan tabel Order
  User.hasMany(models.Order, { foreignKey: 'buyerId', onDelete: 'CASCADE' });
};

module.exports = User;
