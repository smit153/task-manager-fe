import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Completed from "./components/Completed/Completed";

import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="completed" element={<Completed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
