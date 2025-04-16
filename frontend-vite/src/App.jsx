import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import RoleRequest from "./pages/RoleRequest"; // Impor RoleRequest
import AccRole from "./pages/admin/AccRole"; // Impor AccRole
import Register from "./pages/Register"; // Impor Register

function App() {
  return (
    <Router>
      <Layout> {/* Menempatkan Layout di sini untuk membungkus seluruh route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/role-request" element={<RoleRequest />} /> {/* Rute untuk RoleRequest */}
          <Route path="/admin/acc-role" element={<AccRole />} /> {/* Rute untuk AccRole */}
          <Route path="/register" element={<Register />} /> {/* Rute untuk Register */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
