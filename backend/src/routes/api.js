const express = require('express');
const router = express.Router();
const productRoutes = require('./productRoutes');

router.use('/products', productRoutes); // Semua rute produk ada di /api/products

// Endpoint utama API
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: '✅ API is working!',
    });
});

// Middleware untuk menangani rute yang tidak ditemukan
router.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: '❌ API route not found!',
    });
});

module.exports = router;
