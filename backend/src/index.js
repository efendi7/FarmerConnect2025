require('dotenv').config();
console.log("🧪 .env loaded. PORT =", process.env.PORT); // ✅ Tambahan log

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import index.js dari routes
const sequelize = require('./config/db'); // Pakai Sequelize, bukan mysql2

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', routes);

// Handle 404 Not Found
app.use((req, res, next) => {
  res.status(404).json({ message: '❌ Route not found!' });
});

// Middleware Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Internal Server Error:', err?.stack || err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Fungsi untuk memulai server setelah koneksi database berhasil
async function startServer() {
  try {
    await sequelize.authenticate(); // ✅ Pakai Sequelize untuk koneksi database
    console.log("✅ Connected to MySQL database!");

    // Sinkronisasi model dengan database (Opsional)
    await sequelize.sync();
    console.log("✅ Database synchronized!");

    // Jalankan server setelah koneksi berhasil
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
}

// Jalankan server
startServer();
