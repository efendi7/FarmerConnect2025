import React, { useState } from 'react';
import api from '../../lib/api'; // Impor instance API dari lib

const AddProductModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    image: null,
  });

  const [isLoading, setIsLoading] = useState(false); // Untuk status loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi data input
    if (!formData.name || !formData.price || !formData.stock) {
      alert('Semua field wajib diisi!');
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      setIsLoading(true); // Mulai status loading
      const response = await api.post('/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Produk berhasil ditambahkan!');
      console.log('Respons dari server:', response.data);
      closeModal(); // Tutup modal setelah berhasil
    } catch (error) {
      console.error('Gagal menambahkan produk:', error);
      alert('Terjadi kesalahan saat menambahkan produk!');
    } finally {
      setIsLoading(false); // Akhiri status loading
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4">Tambah Produk</h3>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Nama Produk:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Masukkan nama produk"
            required
          />

          <label className="block mb-2">Harga:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Masukkan harga produk"
            required
          />

          <label className="block mb-2">Stok:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            placeholder="Masukkan jumlah stok"
            required
          />

          <label className="block mb-2">Gambar:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 border rounded mb-4"
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
              onClick={closeModal}
              disabled={isLoading} // Disabled saat loading
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={isLoading} // Disabled saat loading
            >
              {isLoading ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
