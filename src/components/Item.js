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
            className="catalogItem itemPageImg"
            src={item.img}
            alt={item.name}
            onMouseOver={(e) => (e.currentTarget.src = item.imgback)}
            onMouseOut={(e) => (e.currentTarget.src = item.img)}
          />
        </div>
        <div className="rightPage">
          <div className="buyWrapper">
            <div className="itemPriceContainer">
              <span className="itemPriceBefore">
                ${(item.price * (1.05 + Math.random() * 10)).toFixed(0)}
              </span>
              <span className="itemPrice">${item.price}</span>
            </div>
            <div className="itemBtnContainer">
              <button className="addBtn" onClick={() => handleAddToCart(item)}>
                Add to cart
              </button>
              <button className="addBtn instantBtn">BUY IT NOW!</button>
            </div>
          </div>
          <span className="itemDescription" item-testid="descriptionSpan">
            {item.description}
          </span>
        </div>
        <div className="bottomPage">
          <Link to="/catalog">
            <button className="addBtn">Go back</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Item;
