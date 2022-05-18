import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/Dashboard";

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
}

export default RoutesPages;
