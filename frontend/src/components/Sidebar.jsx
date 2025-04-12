import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiHome, FiGrid, FiBox } from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[60] h-screen bg-green-700 text-white shadow-lg
      transition-all duration-300 ease-in-out flex flex-col
      ${isOpen ? "w-64" : "w-14"} overflow-hidden
    `}
    >
      {/* Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-green-600">
        {isOpen ? (
          <>
            <span className="font-bold text-xl transition-all duration-300">
              FarmerConnect
            </span>
            <button onClick={toggleSidebar} className="text-white text-2xl">
              <FiMenu size={24} />
            </button>
          </>
        ) : (
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl w-full flex justify-center"
          >
            <FiMenu size={24} />
          </button>
        )}
      </div>

      {/* Nav Menu */}
      <nav className="flex flex-col p-2 space-y-2">
        <Link
          to="/"
          className={`flex items-center h-16 gap-4 rounded hover:bg-green-800 transition-all duration-300 ${
            isOpen ? "pl-4" : "pl-2"
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <FiHome size={24} />
          </div>
          <span className={`${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
            Home
          </span>
        </Link>

        <Link
          to="/dashboard"
          className={`flex items-center h-16 gap-4 rounded hover:bg-green-800 transition-all duration-300 ${
            isOpen ? "pl-4" : "pl-2"
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <FiGrid size={24} />
          </div>
          <span className={`${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
            Dashboard
          </span>
        </Link>

        {/* Tambahkan Menu Products */}
        <Link
          to="/products"
          className={`flex items-center h-16 gap-4 rounded hover:bg-green-800 transition-all duration-300 ${
            isOpen ? "pl-4" : "pl-2"
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <FiBox size={24} />
          </div>
          <span className={`${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
            Products
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
