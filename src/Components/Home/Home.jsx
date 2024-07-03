// src/pages/Home.js
import React from "react";
import Introduction from "./Introduction";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default Home;
