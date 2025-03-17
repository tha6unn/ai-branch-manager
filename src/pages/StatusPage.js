import React from "react";
import { motion } from "framer-motion";

const StatusPage = () => {
  const status = "✅ Approved"; // This will come from backend API later

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-teal-600 text-white">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loan Status
      </motion.h2>
      <motion.h3
        className="text-2xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {status}
      </motion.h3>
    </div>
  );
};

export default StatusPage;
