const express = require('express');
const routes = require('./routes');
const authRoutes = require('./routes/auth');
const roleRequestRoutes = require('./routes/roleRequest'); // Tambahkan rute baru

const app = express();
app.use(express.json());

// Rute API utama dan autentikasi
app.use('/api', routes);
app.use('/api/auth', authRoutes);

// Rute untuk pengajuan role
app.use('/api/role-request', roleRequestRoutes); // Rute untuk pengajuan role

app.listen(5000, () => console.log('Server running on port 5000'));
