import React, { useState, useEffect } from "react";

const ProductDetailsModal = ({ product, closeModal, updateProduct }) => {
  const [isEditing, setIsEditing] = useState(false); // State untuk mode edit
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    image: null,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        stock: product.stock,
        image: product.image || null,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if updateProduct exists before calling it
    if (typeof updateProduct === 'function') {
      updateProduct(formData); // Fungsi untuk memperbarui produk
      setIsEditing(false); // Kembali ke mode read-only setelah submit
      closeModal();
    } else {
      console.error("updateProduct is not a function");
      // Optionally show an error message to the user
    }
  };

  // Fungsi untuk mengatur mode edit tanpa menutup modal
  const toggleEditMode = (e) => {
    e.preventDefault(); // Prevent default to avoid any form submission
    e.stopPropagation(); // Stop event propagation
    setIsEditing(true);
  };

  // Fungsi untuk membatalkan edit
  const cancelEdit = (e) => {
    e.preventDefault(); // Prevent default
    e.stopPropagation(); // Stop event propagation
    
    // Reset form data to original product data
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      image: product.image || null,
    });
    
    setIsEditing(false);
  };

  // Fungsi untuk menutup modal dengan mencegah propagation
  const handleCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      <div className="bg-white p-6 rounded shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-bold mb-4">Detail Produk</h3>
        <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
          <label className="block mb-2">Nama Produk:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full p-2 border rounded mb-4 ${
              isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
            }`}
          />

          <label className="block mb-2">Harga:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full p-2 border rounded mb-4 ${
              isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
            }`}
          />

          <label className="block mb-2">Stok:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full p-2 border rounded mb-4 ${
              isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
            }`}
          />

          <label className="block mb-2">Gambar:</label>
          <input
            type="file"
            name="image"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            disabled={!isEditing}
            className={`w-full p-2 border rounded mb-4 ${
              isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
            }`}
          />

          {/* Tombol Aksi di Pojok Kanan Bawah */}
          <div className="flex justify-end space-x-2">
            {isEditing ? (
              <>
                <button
                  type="button"
                  className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
                  onClick={cancelEdit}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
                  onClick={handleCloseModal}
                >
                  Tutup
                </button>
                <button
                  type="button"
                  className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500"
                  onClick={toggleEditMode}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetailsModal;