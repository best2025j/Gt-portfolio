import React from "react";
import { Outlet } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills";
const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Resume />
      <Contact />
      <Outlet />
    </>
  );
};

export default Home;
