import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import data from "../data/Data";
import Header from "./Header";
import categories from "../data/categories";
import Item from "./Item";

const Catalog = (props) => {
  const [productsToShow, setProductsToShow] = useState(data);

  const updateProducts = (category) => {
    if (category) {
      const newProductsToShow = [
        data[data.findIndex((item) => item.category === category)],
      ];
      setProductsToShow(newProductsToShow);
    } else {
      setProductsToShow(data); // goes back to "all" sorting if no category is found
    }
  };

  useEffect(() => {
    if (productsToShow.length < 5) {
      //handle browser title when clicking on categories
      document.title = `Shopping Cart Catalog - ${productsToShow[0].category}`;
    } else {
      document.title = `Shopping Cart Catalog - All`;
    }
  }, [productsToShow]);

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
            <Link to={`/catalog`} key={"all"} onClick={() => updateProducts()}>
              All
            </Link>
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
                <Link to={`/catalog/${item.id}`} key={item.name} state={item}>
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
                </Link>
              ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default Catalog;
