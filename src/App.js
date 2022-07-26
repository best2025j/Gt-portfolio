import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </>
  );
};

export default App;
