import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import data from "../data/Data";
import Header from "./Header";
import categories from "../data/categories";
import uniqid from "uniqid";

const Catalog = (props) => {
  const [productsToShow, setProductsToShow] = useState(data);

  const updateProducts = (category) => {
    if (category) {
      const newProductsToShow = data.filter(
        (item) => item.category === category
      );
      console.log("category!: ", category, "products", newProductsToShow);
      setProductsToShow(newProductsToShow);
      console.log(productsToShow[0].category);
    } else {
      setProductsToShow(data); // goes back to "all" sorting if no category is found
      console.log("fuck no category!: ", data);
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
            <Link
              to={`/catalog`}
              key={uniqid()}
              onClick={() => updateProducts()}
            >
              All
            </Link>
            {categories.map((item) => (
              <Link to={`/catalog/${item.id}`} key={uniqid()}>
                <li
                  className="categoryListIem"
                  key={uniqid()}
                  onClick={() => updateProducts(item.id)}
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
                <Link
                  to={`/catalog/${item.category}`}
                  key={uniqid()}
                  state={item}
                >
                  <li key={uniqid()} className="catalogItemLi">
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
