import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "UnityServe",
    description:
      "Streamlines volunteer coordination with intuitive registration and task management features.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://volunteer-auth-206ee.web.app/",
    GServer: "https://github.com/Shakil4432/UnityServe_Server",
    GClient: "https://github.com/Shakil4432/UnityServe",
  },
  {
    name: "Medi Shop",
    description:
      "E-commerce platform for purchasing medicines and healthcare products with secure transactions and personalized shopping experiences.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
  {
    name: "Car View Shop",
    description:
      "E-commerce platform for purchasing medicines and healthcare products with secure transactions and personalized shopping experiences.",
    technologies: "React.js, MongoDB, Tailwind CSS, Firebase, JWT",
    liveLink: "https://medicine-shop-auth.web.app/",
    GServer: "https://github.com/Shakil4432/Medi_Shop_Server",
    GClient: "https://github.com/Shakil4432/Medi_Shop",
  },
];

const Portfolio = () => {
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
        <h1 className="text-4xl font-bold mb-4 text-blue-600">My Work</h1>
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
          className="text-3xl font-semibold mb-6 text-primary"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>

              <p className="mb-4">{project.description}</p>
              <div className="flex items-center justify-center gap-5">
                <a
                  href={project.liveLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
                <a
                  href={project.GServer}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Girhub Server
                </a>
                <a
                  href={project.GClient}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Client
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      ></motion.footer>
    </motion.div>
  );
};

export default Portfolio;
