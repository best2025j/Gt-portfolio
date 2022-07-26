import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";

const App = () => {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
