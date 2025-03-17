import React, { useState } from "react";
import VideoRecorder from "../components/VideoRecorder";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const VideoPage = () => {
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Record Your Answers
      </motion.h2>
      <VideoRecorder onVideoCapture={setVideoData} />
      <motion.button
        onClick={() => navigate("/upload")}
        className="mt-6 bg-red-400 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-red-500 transition duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Next: Upload Documents
      </motion.button>
    </div>
  );
};

export default VideoPage;
