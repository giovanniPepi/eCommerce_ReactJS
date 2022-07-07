import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Catalog from "./Catalog";
import Item from "./Item";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
