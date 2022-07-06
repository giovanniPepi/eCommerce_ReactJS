import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Catalog from "./Catalog";
import Item from "./Item";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="processors" element={<Catalog />} />
          <Route path="motherboards" element={<Catalog />} />
          <Route path="monitors" element={<Catalog />} />
          <Route path="GPUs" element={<Catalog />} />
          <Route path="RAM" element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
