import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-20 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-6 text-center text-primary dark:text-white"
      >
        Contact
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl mb-6 text-center text-secondary dark:text-gray-300"
      >
        Email: shakil4432@gmail.com
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center justify-center space-x-6"
      >
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          href="https://www.linkedin.com/in/shakil-hossain4432/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaLinkedin className="text-3xl" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          href="https://web.facebook.com/profile.php?id=61555055485426&_rdc=1&_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaFacebook className="text-3xl" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2 }}
          href="https://github.com/Shakil4432"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaGithub className="text-3xl" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
