import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to AI Branch Manager
      </motion.h1>
      <p className="text-lg text-center mb-6">
        Apply for a loan digitally with a human-like experience.
      </p>
      <motion.button
        onClick={() => navigate("/video")}
        className="bg-yellow-400 text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Start Application
      </motion.button>
    </div>
  );
};

export default HomePage;
