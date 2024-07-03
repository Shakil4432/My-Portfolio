import React from "react";
import { motion } from "framer-motion";
import certificateImage from "../../../public/college.jpg";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-gray-100 dark:text-gray-900 mt-10 mx-auto p-10 rounded-lg border-b"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-bold mb-8 text-center "
      >
        Education
      </motion.h2>
      <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
        <div
          className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4"
          style={{
            backgroundImage: `url('${certificateImage}')`,
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10"
        >
          <div className="flex justify-start"></div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className=" font-semibold"
          >
            Bachelor of Psychology, 3rd Semester
            <br />
            Government Titumir College
            <p className="mt-4">
              Certificate in Web Development
              <br />
              Programming Hero
              <br />
              <a
                href="https://drive.google.com/file/d/11U2TNpxJiFXJrJs5B9n8K0ha2N_jWG02/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Certificate
              </a>
            </p>
          </motion.p>

          <motion.a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            rel="noopener noreferrer"
            href="#"
            className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm dark:text-violet-600"
          ></motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
