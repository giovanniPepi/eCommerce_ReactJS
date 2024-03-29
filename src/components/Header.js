import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../img/icons/cart";

const Header = ({ amountInCart, animation }) => {
  return (
    <header className="header" data-testid="headerTest">
      <nav className="headerNav">
        <Link to="/catalog">
          <button className="addBtn headerBtn">Catalog</button>
        </Link>
        <Link to="/shopping-cart">
          <span className="cart" animation={animation}>
            <CartIcon />
            {amountInCart} items
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
