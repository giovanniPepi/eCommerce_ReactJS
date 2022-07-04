import "./App.css";
import React from "react";
import Item from "./components/Item";
import Catalog from "./components/Catalog";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to="/catalog">Catalog</Link>
    </>
  );
};

export default App;
