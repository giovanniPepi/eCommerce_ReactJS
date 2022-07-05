import React from "react";
import data from "../data/Data";
import Header from "./Header";

const Catalog = (props) => {
  const categories = ["Processors", "Motherboards", "GPUs", "Monitors", "RAM"];

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
        <section className="itemGrid">
          <ul className="catalogList">
            {data &&
              data.map((item) => (
                <li key={item.name} className="catalogItemLi">
                  <div className="itemCatalogContainer">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="catalogItem front"
                    />
                    <img
                      src={item.imgback}
                      alt={item.name}
                      className="catalogItem back"
                    />
                  </div>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Catalog;
