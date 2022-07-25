import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Resume from "./Pages/Resume";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Contact />

      <Routes>
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
