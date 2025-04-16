import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import api from "../lib/api"; // instance dari axios

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const loginMutation = useMutation({
    mutationFn: async () => {
      const { data } = await api.post("/auth/login", form);
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      navigate("/dashboard"); // redirect setelah login
    },
    onError: (error) => {
      alert(error.response?.data?.message || "Login gagal");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800"
        >
          {loginMutation.isPending ? "Loading..." : "Login"}
        </button>
      </form>

      <div className="mt-4">
        <p className="text-center">
          Belum punya akun?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-500 hover:underline"
          >
            Daftar dulu
          </button>
        </p>
      </div>
    </main>
  );
};

export default Login;
