module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin Farmer',
        email: 'admin@farmerconnect.com',
        password: '$2a$10$abcdefghijkmnopqrstuvwxyz', // Gunakan bcrypt untuk hashing
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '$2a$10$abcdefghijkmnopqrstuvwxyz',
        role: 'farmer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
