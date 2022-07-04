import React from "react";
import data from "../data/Data";
import Header from "./Header";

const Catalog = (props) => {
  return (
    <main className="mainContent">
      <Header />
      <section className="catalog">
        <nav className="leftBarNav">
          <ul className="ulCategory">
            {data.map((item) => (
              <li className="categoryListIem" key={item.name}>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <section className="itemGrid"></section>
      </section>
    </main>
  );
};

export default Catalog;
