import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center max-w-xl w-full mt-20"
      >
        <TypeAnimation
          sequence={["Selamat Datang di FarmerConnect", 2000, "", 500]}
          wrapper="h1"
          speed={60}
          repeat={Infinity}
          className="text-3xl md:text-4xl font-extrabold text-green-700"
        />
        
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          Platform digitalisasi yang menghubungkan petani dan pembeli langsung
        </p>
        
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-auto mt-10 w-36 md:w-44"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <Link to="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            Jelajahi Produk
          </motion.button>
        </Link>
        
        <p className="mt-6 text-sm text-gray-500 italic">
          "Bersama petani lokal, bangun masa depan yang berkelanjutan."
        </p>
      </motion.div>
    </div>
  );
};

export default Home;