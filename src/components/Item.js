import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "./Header";

const Item = ({ item, handleAddToCart }) => {
  return (
    <main className="mainContent itemPage">
      <section className="itemInfo">
        <div className="leftPage">
          <span className="itemName" item-testid="nameSpan">
            {item.name}
          </span>
          <img
            className="catalogItem front itemPageImg"
            src={item.img}
            alt={item.name}
          />
          <img
            className="catalogItem back itemPageImg"
            src={item.imgback}
            alt={item.name}
          />
          <span className="itemDescription" item-testid="descriptionSpan">
            {item.name}
            {item.description}
          </span>
        </div>
        <div className="rightPage">${item.price}</div>
      </section>
      <Link to="/catalog">
        <button>Go back</button>
      </Link>
      <button className="addBtn" onClick={() => handleAddToCart(item)}>
        Add to cart
      </button>
      <button className="addBtn instantBtn">BUY IT NOW!</button>
    </main>
  );
};

export default Item;
