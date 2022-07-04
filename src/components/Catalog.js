import React from "react";
import categories from "../data/categories";
import Header from "./Header";

const Catalog = (props) => {
  return (
    <main className="mainContent">
      <Header />
      <section className="catalog">
        <nav className="leftBarNav">
          <ul className="ulCategory">
            {categories.map((item) => (
              <li className="categoryListIem" key={item}>
                {item}
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
