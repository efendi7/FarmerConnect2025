const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User'); // Import model User

const Product = sequelize.define(
    'Product',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'products', // Opsional: untuk kontrol nama tabel
        timestamps: true,     // Otomatis mengisi `createdAt` & `updatedAt`
        underscored: true,    // Pakai `created_at` alih-alih `createdAt`
    }
);

// Tambahkan relasi belongsTo
Product.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Product;
