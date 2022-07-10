import React from "react";
import { Link } from "react-router-dom";

const Header = ({ amountInCart }) => {
  return (
    <header className="header" data-testid="headerTest">
      <nav className="headerNav">
        <Link to="/">
          <button className="addBtn">Home</button>
        </Link>
        <Link to="/catalog">
          <button className="addBtn">Catalog</button>
        </Link>
        <Link to="/shopping-cart">Cart</Link>
        <div className="cart">Amount in cart: {amountInCart}</div>
      </nav>
    </header>
  );
};

export default Header;
