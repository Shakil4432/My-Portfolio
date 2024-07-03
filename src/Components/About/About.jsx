import React from "react";
import { motion } from "framer-motion";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900"
    >
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About Me</h1>
      </motion.header>
      <motion.section
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto px-4"
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-semibold mb-4 text-primary"
        >
          Biography
        </motion.h2>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
        >
          I am a Frontend Developer focused on crafting responsive and
          user-friendly web applications using modern technologies like React.js
          and Tailwind CSS. Currently, I am a student at Government Titumir
          College, pursuing a degree in Psychology, and I hold a certificate in
          Web Development from Programming Hero.
        </motion.p>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-semibold mt-8 mb-4 text-primary"
        ></motion.h2>
        <motion.ul
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="list-disc list-inside mb-8"
        >
          <Skills></Skills>
        </motion.ul>
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-semibold mt-8 mb-4 text-primary"
        >
          Testimonials
        </motion.h2>
        <motion.blockquote
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="italic bg-gray-100 text-gray-800 p-4 rounded-md shadow-md"
        >
          "Md Shakil Hossain is a talented developer with a keen eye for design
          and user experience." - [Jhankar Mahbub]
        </motion.blockquote>
      </motion.section>
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <p>&copy; 2024 Md Shakil Hossain</p>
      </motion.footer>
    </motion.div>
  );
};

export default About;
