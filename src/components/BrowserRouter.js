import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Catalog from "./Catalog";
import Item from "./Item";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="catalog" element={<Catalog />}>
            <Route path=":category" element={<Catalog />}>
              <Route path=":item" element={<Item />} />
            </Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Route not found!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
