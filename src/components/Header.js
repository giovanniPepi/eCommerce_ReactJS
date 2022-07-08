import React from "react";
import { Link } from "react-router-dom";

const Header = ({ amountInCart }) => {
  return (
    <header className="header" data-testid="headerTest">
      <nav className="headerNav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/catalog">
          <button>Catalog</button>
        </Link>
        <Link to="/shopping-cart">Cart</Link>
        <div className="cart">Amount in cart: {amountInCart}</div>
      </nav>
    </header>
  );
};

export default Header;
