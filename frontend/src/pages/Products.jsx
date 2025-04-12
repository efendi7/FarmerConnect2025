// src/pages/Products.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';

const fetchProducts = async () => {
  // Menggunakan axios instance
  const { data } = await api.get('/products');
  return data;
};

const Products = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // data fresh 5 menit
    retry: 2,                 // retry max 2 kali
  });

  if (isLoading) return <p className="p-6">Loading…</p>;
  if (isError)  return <p className="p-6 text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-20">
      <h2 className="text-xl font-bold mb-4">Daftar Produk</h2>
      <ul className="space-y-2">
        {products.map(p => (
          <li key={p.id} className="p-2 border rounded-md shadow">
            <strong>{p.name}</strong> – Rp{p.price} (Stock: {p.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
