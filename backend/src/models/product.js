const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
        tableName: 'products',  // Opsional: agar tidak pakai nama tabel otomatis
        timestamps: true,       // Agar `createdAt` & `updatedAt` otomatis diisi
        underscored: true,      // Opsional: agar pakai `created_at` bukan `createdAt`
    }
);

module.exports = Product;
