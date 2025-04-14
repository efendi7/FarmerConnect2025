import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiHome, FiGrid, FiBox } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/img/logowbg.png"; // atau sesuaikan path kamu

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarVariants = {
    open: {
      width: "20rem", // dari 16rem ke 20rem
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    closed: {
      width: "3.5rem",
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  const textVariants = {
    open: {
      opacity: 1,
      scale: 1,
      x: 0,
      display: "block",
      transition: { delay: 0.1 },
    },
    closed: {
      opacity: 0,
      scale: 0.8,
      x: -10,
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      className="fixed top-0 left-0 z-[60] h-screen bg-green-700 text-white shadow-lg flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-green-600">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="logo-title"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex items-center gap-2"
            >
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg mt-1" />
              <span className="font-bold text-xl">FarmerConnect</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleSidebar}
          className="text-white text-2xl transition-transform duration-300 hover:rotate-90"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col p-2 space-y-2">
        {[
          { to: "/", label: "Home", icon: FiHome },
          { to: "/dashboard", label: "Dashboard", icon: FiGrid },
          { to: "/products", label: "Products", icon: FiBox },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              to={item.to}
              className="flex items-center h-16 gap-4 rounded hover:bg-green-800 transition-colors duration-300 pl-2"
            >
              {/* Icon dengan efek fade */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isOpen ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 flex items-center justify-center"
              >
                <Icon size={24} />
              </motion.div>

              {/* Teks menu */}
              <motion.span variants={textVariants} className="origin-left">
                {item.label}
              </motion.span>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
