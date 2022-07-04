import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { cart } = props;

  return (
    <header className="itemPageHeader" data-testid="headerTest">
      <nav className="itemPageNav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/catalog">
          <button>Catalog</button>
        </Link>
        <div className="cart">{cart}</div>
      </nav>
    </header>
  );
};

export default Header;
