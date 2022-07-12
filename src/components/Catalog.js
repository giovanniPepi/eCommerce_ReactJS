import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useParams, Outlet } from "react-router-dom";
import data from "../data/Data";
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
      document.title = `Shopping Cart Catalog - ${category}`;
    } else {
      setProductsToShow(data); // goes back to "all" sorting if no category is found
      console.log("no category!: ", data);
      document.title = `Shopping Cart Catalog - All`;
    }
  };

  useEffect(() => {
    document.title = `Shopping Cart Catalog - All`;
  }, []);

  return (
    <main className="mainContent">
      <section className="catalog">
        <nav className="leftBarNav">
          {productsToShow.length > 50 ? (
            <div className="leftNavItemContainer showingAll">
              <div className="categoriesDisplayer">Showing All</div>
              <div className="divider showingAll"></div>
            </div>
          ) : (
            <div className="categoriesDisplayer">
              Showing {productsToShow[0].category}
            </div>
          )}
          <ul className="ulCategory">
            {categories.map((item) => (
              <Link to={`/catalog`} key={uniqid()}>
                <div
                  className="leftNavItemContainer"
                  onClick={() => updateProducts(item.id)}
                >
                  <li className="categoryListIem" key={uniqid()}>
                    {item.name}s
                  </li>
                  <div className="divider"></div>
                </div>
              </Link>
            ))}
          </ul>
        </nav>
        <section className="itemGrid">
          {/* Main page will display every item on database  */}
          <ul className="catalogList">
            {productsToShow &&
              productsToShow.map((item) => (
                <Link to={`/catalog/${item.id}`} key={uniqid()} state={item}>
                  <li key={uniqid()} className="catalogItemLi">
                    <div className="itemCatalogContainer">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="catalogItem"
                        onMouseOver={(e) =>
                          (e.currentTarget.src = item.imgback)
                        }
                        onMouseOut={(e) => {
                          e.currentTarget.src = item.img;
                        }}
                      />
                    </div>
                    <span className="itemName catalogName">{item.name}</span>
                    <span className="itemPrice catalogPrice">
                      ${item.price}
                    </span>
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
