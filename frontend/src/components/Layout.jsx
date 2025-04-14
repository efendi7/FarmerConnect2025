import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1024);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        setIsSidebarOpen(width >= 768);
      };
      
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Background that fills the entire content area */}
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">
          <Navbar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            windowWidth={windowWidth}
          />
          
          {/* Main content area */}
          <div className="flex-1 p-6">
            {children}
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;