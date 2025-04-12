const connection = require('../config/db');

connection.query('SHOW TABLES', (err, results) => {
  if (err) {
    console.error('Error executing query:', err.message);
    return;
  }
  console.log('Available tables:', results);
  connection.end(); // Tutup koneksi setelah query selesai
});
