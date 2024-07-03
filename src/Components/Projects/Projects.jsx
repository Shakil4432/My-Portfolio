import React from "react";
import { motion } from "framer-motion";

const primaryColor = "#1a73e8";
const secondaryColor = "#34a853";

const Projects = () => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 lg:max-w-6xl mx-auto p-10 rounded-lg  "
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-8 text-primary text-center"
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg overflow-hidden bg-white shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <motion.h3 className="text-2xl font-bold mb-3 text-primary">
              {project.name}
            </motion.h3>
            <motion.p className="text-gray-700 mb-3">
              {project.description}
            </motion.p>
            <motion.p className=" mb-3 text-blue-500">
              {project.technologies}
            </motion.p>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block  bg-primary py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-colors duration-300"
            >
              Live Link
            </motion.a>
            <motion.a
              href={project.GServer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block  bg-primary py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-colors duration-300"
            >
              G Server
            </motion.a>
            <motion.a
              href={project.GClient}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block  bg-primary py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-colors duration-300"
            >
              G Client
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
