// src/pages/RoleRequest.jsx
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../lib/api";
import { useNavigate } from "react-router-dom";

const RoleRequest = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const roleRequestMutation = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/roles/request", { role, description });
      return data;
    },
    onSuccess: () => {
      alert("Pengajuan role berhasil!");
      navigate("/dashboard"); // Bisa disesuaikan jika ada halaman lain setelah pengajuan
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Pengajuan role gagal");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    roleRequestMutation.mutate();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-semibold mb-4">Pengajuan Role</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Pilih Role</option>
          <option value="petani">Petani</option>
          <option value="pembeli">Pembeli</option>
        </select>
        <textarea
          placeholder="Deskripsi mengapa Anda ingin mendapatkan role ini"
          className="w-full border p-2 rounded"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
        >
          {roleRequestMutation.isPending ? "Mengajukan..." : "Ajukan Role"}
        </button>
      </form>
    </main>
  );
};

export default RoleRequest;
