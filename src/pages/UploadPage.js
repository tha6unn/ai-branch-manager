import React, { useState } from "react";
import DocumentUpload from "../components/DocumentUpload";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UploadPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-orange-600 text-white">
      <motion.div
        className="bg-white text-black p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Upload Documents</h2>
        <DocumentUpload onUpload={setFile} />
      </motion.div>
      <motion.button
        onClick={() => navigate("/status")}
        className="mt-6 bg-blue-400 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-500 transition duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Next: Check Loan Status
      </motion.button>
    </div>
  );
};

export default UploadPage;
