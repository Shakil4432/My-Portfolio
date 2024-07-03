import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20  py-10 bg-gradient-to-r shadow-lg border-t">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" mx-auto text-center"
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-4"
        >
          &copy; {new Date().getFullYear()} Md Shakil Hossain . All rights
          reserved.
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm mb-4"
        >
          Frontend Developer specializing in React.js and Tailwind CSS. Let's
          <br />
          connect and create something amazing together!
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-6"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin className="fa-2x" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebook className="fa-2x" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub className="fa-2x" />
          </motion.a>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm"
        >
          Designed and built with love and passion. Contact:
          shakil4432@gmail.com
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
