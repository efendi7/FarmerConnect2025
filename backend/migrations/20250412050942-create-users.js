'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING, // Peran pengguna: Admin, Petani, Pembeli
        allowNull: false
      },
      name: {
        type: Sequelize.STRING, // Nama pengguna
        allowNull: false
      },
      email: {
        type: Sequelize.STRING, // Email pengguna
        allowNull: false,
        unique: true // Email harus unik
      },
      password: {
        type: Sequelize.STRING, // Kata sandi (hashed)
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE // Tanggal pembuatan data
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE // Tanggal terakhir pembaruan data
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
