import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";
const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
