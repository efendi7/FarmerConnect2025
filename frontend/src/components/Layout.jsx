import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // Handle perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      // Auto close sidebar jika < 768px
      if (width < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize(); // Inisialisasi pertama
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
  {/* Sidebar */}
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

  {/* Konten utama */}
  <div
    className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
      isSidebarOpen ? "ml-64" : "ml-0"
    }`}
  >
    <Navbar
      toggleSidebar={toggleSidebar}
      isSidebarOpen={isSidebarOpen}
      windowWidth={windowWidth}
    />

    {/* Main content */}
    <main className="flex-grow p-6">
      {children}
    </main>

    <Footer />
  </div>
</div>

  );
};

export default Layout;
