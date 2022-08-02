import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/login/LoginPage";
import EpicPage from "../epic/details/DetailsPage";
import HomePage from "./HomePage";

function AppRouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/epic/details" element={<EpicPage />} />
    </Routes>
  );
}

export default AppRouterOutlet;
