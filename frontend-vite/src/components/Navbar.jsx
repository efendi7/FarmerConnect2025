import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload(); // Optional: untuk force refresh UI
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center justify-between px-6 z-30">
      <div className="text-xl font-bold text-green-700"></div>

      <div className="flex-1"></div>

      {/* Kanan */}
      <div className="relative" ref={dropdownRef}>
        {isLoggedIn ? (
          <>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className="text-sm font-medium text-gray-700">Halo, User</span>
              <img
                src="https://ui-avatars.com/api/?name=User"
                alt="User Avatar"
                className="w-8 h-8 rounded-full border border-gray-300"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profil Saya
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Pengaturan
                </Link>
                <hr className="my-1 border-gray-200" />
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <Link
            to="/login"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;