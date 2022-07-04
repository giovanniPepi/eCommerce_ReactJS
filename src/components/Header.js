import React from "react";

const Header = (props) => {
  const { cart } = props;

  return (
    <header className="itemPageHeader" data-testid="headerTest">
      <nav className="itemPageNav">
        <button>Home</button>
        <button>Catalog</button>
        <div className="cart">{cart}</div>
      </nav>
    </header>
  );
};

export default Header;
