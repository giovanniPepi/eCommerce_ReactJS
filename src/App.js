import "./App.css";
import React from "react";
import { Route, Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="mainHome">
      <div className="mainBg"></div>
      <span className="homeIntro">
        Your dream PC Build awaits you!
        <Link to="/catalog">Catalog</Link>
      </span>
    </main>
  );
};

export default App;
