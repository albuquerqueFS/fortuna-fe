import { Route, Routes } from "react-router-dom";
import { MapPage } from "../pages/main";

export function Router() {
  return (
    <Routes>
      <Route element={<MapPage />} path="/" />
    </Routes>
  );
}
