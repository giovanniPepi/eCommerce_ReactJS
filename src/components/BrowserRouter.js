import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Catalog from "./Catalog";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="/catalog/:categoryId" element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
