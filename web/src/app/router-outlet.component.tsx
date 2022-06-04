import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/home.component";
import About from "../home/about.component";

function AppRouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRouterOutlet;
