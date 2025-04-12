"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Tomat Segar",
        price: 5000,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cabai Merah",
        price: 15000,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
