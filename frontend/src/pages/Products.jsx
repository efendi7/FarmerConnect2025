// src/pages/Products.jsx
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api"; // Mengimpor API instance
import AddProductModal from "../components/AddProductModal"; // Impor modal tambah produk
import ProductDetailsModal from "../components/ProductDetailsModal"; // Impor modal detail produk

// Fungsi untuk mengambil data produk
const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

const Products = () => {
  // State untuk mengelola visibilitas modal tambah produk
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk produk yang dipilih untuk detail
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Query client untuk invalidasi query
  const queryClient = useQueryClient();

  // Data produk menggunakan React Query
  const { data: products = [], isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });
  
  // Mutation untuk memperbarui produk
  const updateProductMutation = useMutation({
    mutationFn: async (updatedProduct) => {
      const { data } = await api.put(`/products/${selectedProduct.id}`, updatedProduct);
      return data;
    },
    onSuccess: () => {
      // Invalidasi query dan muat ulang data produk
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  // Fungsi untuk membuka dan menutup modal tambah produk
  const openAddProductModal = () => setIsModalOpen(true);
  const closeAddProductModal = () => setIsModalOpen(false);

  // Fungsi untuk menutup modal detail produk
  const closeDetailModal = () => setSelectedProduct(null);
  
  // Fungsi untuk memperbarui produk
  const handleUpdateProduct = (updatedProductData) => {
    updateProductMutation.mutate(updatedProductData);
  };

  // Tampilan jika data sedang dimuat
  if (isLoading) return <p className="p-6">Loading...</p>;

  // Tampilan jika terjadi error saat memuat data
  if (isError) return <p className="p-6 text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-20">
      <h2 className="text-xl font-bold mb-4">Daftar Produk</h2>

      {/* Tombol untuk membuka modal tambah produk */}
      <button
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={openAddProductModal}
      >
        Tambah Produk
      </button>

      {/* Tabel Produk */}
      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="min-w-full bg-white text-sm text-left text-gray-800">
          <thead className="bg-green-100 uppercase text-xs tracking-wide text-green-900">
            <tr>
              <th className="px-6 py-4">Nama Produk</th>
              <th className="px-6 py-4">Gambar</th>
              <th className="px-6 py-4">Stok</th>
              <th className="px-6 py-4">Harga</th>
              <th className="px-6 py-4">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-green-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  {product.name}
                </td>
                <td className="px-6 py-4">
                  <img
                    src={product.image || "https://via.placeholder.com/50"}
                    alt={product.name}
                    className="w-12 h-12 rounded-md border border-gray-300 object-cover shadow-sm"
                  />
                </td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4 text-green-700 font-semibold">
                  Rp{Number(product.price).toLocaleString("id-ID")}
                </td>
                <td className="px-6 py-4">
                  {/* Tombol Detail */}
                  <button
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Tambah Produk */}
      {isModalOpen && <AddProductModal closeModal={closeAddProductModal} />}

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          closeModal={closeDetailModal}
          updateProduct={handleUpdateProduct}
        />
      )}
    </div>
  );
};

export default Products;