import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "./Header";

const Item = (props) => {
  const location = useLocation();
  const item = location.state;
  console.log("item was loaded", item.name, { item });

  return (
    <main className="mainContent itemPage">
      <Header />
      <section className="itemInfo">
        <div className="leftPage">
          <span className="itemName" item-testid="nameSpan">
            {item.name}
          </span>
          <img className="itemImg" src={item.img} alt={item.name} />
          <img className="itemImg" src={item.imgback} alt={item.name} />
          <span className="itemDescription" item-testid="descriptionSpan">
            {item.description}
          </span>
        </div>
        <div className="rightPage">${item.price}</div>
      </section>
      <button className="addBtn">Add to cart</button>
      <button className="addBtn instantBtn">BUY IT NOW!</button>
    </main>
  );
};

export default Item;
