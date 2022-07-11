import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item, handleAddToCart }) => {
  return (
    <main className="mainContent itemPage">
      <section className="itemInfo">
        <span className="itemNameTop" item-testid="nameSpan">
          {item.name}
        </span>
        <div className="itemImgContainer">
          <img
            className="catalogItem"
            src={item.img}
            alt={item.name}
            onMouseOver={(e) => (e.currentTarget.src = item.imgback)}
            onMouseOut={(e) => (e.currentTarget.src = item.img)}
          />
        </div>
        <div className="rightPage">
          <span className="itemPrice">${item.price}</span>
          <button className="addBtn" onClick={() => handleAddToCart(item)}>
            Add to cart
          </button>
          <button className="addBtn instantBtn">BUY IT NOW!</button>

          <Link to="/catalog">
            <button className="addBtn">Go back</button>
          </Link>
        </div>
        <div className="bottomPage">
          <span className="itemDescription" item-testid="descriptionSpan">
            {item.description}
          </span>
        </div>
      </section>
    </main>
  );
};

export default Item;
