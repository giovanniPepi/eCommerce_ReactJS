import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "./Header";

const Item = ({ item, handleAddToCart }) => {
  return (
    <main className="mainContent itemPage">
      <section className="itemInfo">
        <div className="topPage">
          <span className="itemName" item-testid="nameSpan">
            {item.name}
          </span>
        </div>
        <div className="itemImgContainer">
          <img
            className="catalogItem"
            src={item.img}
            alt={item.name}
            onMouseOver={(e) => (e.currentTarget.src = item.imgback)}
            onMouseOut={(e) => (e.currentTarget.src = item.img)}
          />
        </div>
        <div className="bottompage">
          <span className="itemDescription" item-testid="descriptionSpan">
            {item.description}
          </span>
          <div className="cartInfoContainer">
            <span className="itemPrice">${item.price}</span>
            <button className="addBtn" onClick={() => handleAddToCart(item)}>
              Add to cart
            </button>
            <button className="addBtn instantBtn">BUY IT NOW!</button>
          </div>
        </div>
      </section>
      <Link to="/catalog">
        <button className="addBtn">Go back</button>
      </Link>
    </main>
  );
};

export default Item;
