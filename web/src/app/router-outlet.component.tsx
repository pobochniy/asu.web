import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "../auth/login/login.component";
import HomeComponent from "./home.component";

function AppRouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
}

export default AppRouterOutlet;
