const express = require('express');
const router = express.Router();
const apiRoutes = require('./api'); // Pastikan routes/api.js ada

router.use('/api', apiRoutes); // Semua API berada di /api

// Endpoint default jika user mengakses root API
router.get('/', (req, res) => {
    res.json({ message: '✅ Welcome to FarmerConnect API!' });
});

// Handle 404 untuk endpoint yang tidak ditemukan
router.use((req, res) => {
    res.status(404).json({ message: '❌ Route not found!' });
});

module.exports = router;
