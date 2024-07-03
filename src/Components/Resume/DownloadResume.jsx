// components/DownloadResume.js

import React from "react";
import { motion } from "framer-motion";

const DownloadResume = () => {
  const downloadResume = () => {
    // Implement your resume download logic here
    alert("Downloading resume...");
  };

  return (
    <div className="text-center mt-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={downloadResume}
      >
        Download Resume
      </motion.button>
    </div>
  );
};

export default DownloadResume;
