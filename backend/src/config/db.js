require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306, // Gunakan default 3306 jika tidak ada di .env
        logging: false, // Matikan log query jika tidak perlu
    }
);

sequelize.authenticate()
    .then(() => console.log("✅ Connected to MySQL database!"))
    .catch(err => {
        console.error("❌ Database connection failed:", err.message);
        process.exit(1); // Hentikan server jika gagal konek database
    });

// Sinkronisasi model dengan database
sequelize.sync({ alter: true })
    .then(() => console.log("✅ Database synchronized!"))
    .catch(err => console.error("❌ Database sync failed:", err.message));

module.exports = sequelize;
