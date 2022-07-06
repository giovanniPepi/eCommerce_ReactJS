import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import data from "../data/Data";
import Header from "./Header";
import categories from "../data/categories";

const Catalog = (props) => {
  const [productsToShow, setProductsToShow] = useState(data);

  const updateProducts = (category) => {
    const newProductsToShow = [
      data[data.findIndex((item) => item.category === category)],
    ];
    setProductsToShow(newProductsToShow);
  };

  useEffect(() => {}, [productsToShow]);

  return (
    <main className="mainContent">
      <Header />
      <section className="catalog">
        <nav className="leftBarNav">
          {productsToShow.length < 5 ? (
            <div>catalog/{productsToShow[0].category}</div>
          ) : (
            <div>catalog/All</div>
          )}
          <ul className="ulCategory">
            {categories.map((item) => (
              <Link to={`/catalog/${item.id}`} key={item.id}>
                <li
                  className="categoryListIem"
                  key={item.name}
                  onClick={() => updateProducts(item.name)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <section className="itemGrid">
          {/* Main page will display every item on database  */}
          <ul className="catalogList">
            {productsToShow &&
              productsToShow.map((item) => (
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
