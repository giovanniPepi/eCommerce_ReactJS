import React from "react";

const Item = (props) => {
  const { name, description, price, frontImg, backImg, cart } = props;

  return (
    <main className="itemPage">
      <header className="itemPageHeader">
        <nav className="itemPageNav">
          <button>Home</button>
          <button>Catalog</button>
          <div className="cart">{cart}</div>
        </nav>
      </header>
      <section className="itemInfo">
        <div className="leftPage">
          <span className="itemName" data-testid="nameSpan">
            {name}
          </span>
          <img className="itemImg" src={frontImg} alt={name} />
          <img className="itemImg" src={backImg} alt={name} />
          <span className="itemDescription" data-testid="descriptionSpan">
            {description}
          </span>
        </div>
        <div className="rightPage">${price}</div>
      </section>
      <button className="addBtn">Add to cart</button>
      <button className="addBtn instantBtn">BUY IT NOW!</button>
    </main>
  );
};

export default Item;
