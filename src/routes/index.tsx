import { Routes, Route } from "react-router-dom";
import WinePage from "../pages/WinePage";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<WinePage />} />
    </Routes>
  );
}

export default RoutesPage;
