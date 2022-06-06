import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home.component";

function AppRouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRouterOutlet;
