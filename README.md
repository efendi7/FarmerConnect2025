# 🌾 FarmerConnect

FarmerConnect adalah aplikasi web yang bertujuan untuk membantu petani lokal menjual hasil pertanian mereka secara langsung kepada pembeli. Selain itu, aplikasi ini menyediakan fitur cuaca, harga pasar, dan edukasi pertanian untuk meningkatkan kesejahteraan petani.

---

## 🎯 Tujuan FarmerConnect

- Mempermudah petani dalam menjual hasil pertanian secara online.
- Menyediakan informasi harga pasar yang akurat.
- Memberikan prediksi cuaca untuk membantu perencanaan pertanian.
- Meningkatkan edukasi petani melalui artikel dan forum komunitas.

---

## 🚀 Fitur Utama

### ✅ Backend (Express.js + MySQL)
- **Autentikasi dengan JWT** → Petani dan pembeli dapat login dengan aman.
- **Pengajuan Role** → Pengguna yang belum memiliki role (misalnya baru mendaftar) dapat mengajukan peran sebagai Petani atau Pembeli.
- **Manajemen Produk** → Petani dapat menambahkan, mengedit, dan menghapus produk.
- **Manajemen Pengguna & Peran** → Admin, Petani, dan Pembeli memiliki peran berbeda.
- **Prediksi Cuaca** → Menggunakan API eksternal untuk memberikan informasi cuaca.
- **Harga Pasar** → Menampilkan harga pasar terbaru dari berbagai sumber.
- **Notifikasi** → Memberikan notifikasi kepada petani jika cuaca buruk atau harga produk berubah.

### ✅ Frontend (React + Tailwind CSS)
- **Dashboard Interaktif** → Menampilkan data produk, cuaca, dan harga pasar.
- **Halaman Marketplace** → Pembeli dapat melihat dan membeli produk dari petani.
- **CRUD Produk** → Petani dapat mengelola produk dengan antarmuka yang mudah digunakan.
- **Tampilan Responsif** → UI yang disesuaikan untuk desktop dan mobile.
- **Konsumsi API dari Backend** → Data diperbarui secara real-time.

---

## 🔑 Role Pengguna
| Role    | Hak Akses |
|---------|-----------|
| **Admin** | Mengelola seluruh aspek aplikasi, termasuk pengguna dan produk. |
| **Petani** | Menjual produk, melihat harga pasar, dan menerima notifikasi cuaca. |
| **Pembeli** | Membeli produk dari petani dan melihat informasi pasar. |
| _(Pending)_ | Pengguna yang baru mendaftar, harus mengajukan role sebelum dapat menggunakan fitur utama. |


## 📊 Alur & Gambaran

1. **Petani Mendaftar & Login**  
   - Petani mendaftarkan akun dan mengisi profil pertanian mereka.  
   - Setelah login, mereka dapat mengelola produk dan melihat cuaca.  

2. **Petani Menambah Produk**  
   - Produk seperti sayuran dan buah bisa ditambahkan dengan harga dan stok.  
   - Produk akan muncul di marketplace setelah diverifikasi oleh admin.  

3. **Pembeli Melihat & Membeli Produk**  
   - Pembeli bisa mencari produk berdasarkan kategori atau harga.  
   - Mereka dapat menghubungi petani atau melakukan pembelian langsung.  

4. **Sistem Notifikasi & Informasi**  
   - Petani menerima notifikasi jika ada perubahan harga pasar atau cuaca buruk.  
   - Admin dapat mengirimkan berita atau edukasi pertanian kepada pengguna.  

---

## 🏗️ Teknologi yang Digunakan

| Layer      | Teknologi                    |
|------------|------------------------------|
| **Backend** | Node.js, Express.js, MySQL  |
| **Frontend** | React, Tailwind CSS, Axios |
| **API Cuaca** | OpenWeatherMap API        |
| **Tools** | Postman, Git, GitHub          |

---

## 🛠️ Cara Menjalankan Proyek

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## ⚙️ Contoh File `.env` (Backend)

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=farmerconnect
JWT_SECRET=supersecretjwt
WEATHER_API_KEY=your_openweather_api_key
```

---

## 📜 Lisensi

MIT License © 2025 Efendi
