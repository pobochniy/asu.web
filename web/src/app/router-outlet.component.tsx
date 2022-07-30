import { Routes, Route } from "react-router-dom";
import LoginPage from "../auth/login/loginPage";
import EpicPage from "../epic/details/detailsPage";
import HomePage from "./homePage";

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
