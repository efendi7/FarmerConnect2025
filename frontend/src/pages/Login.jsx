import React from "react";

const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="w-full max-w-sm space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-green-700 text-white p-2 rounded hover:bg-green-800">Login</button>
      </form>
    </main>
  );
};

export default Login;