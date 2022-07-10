import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";

const Cart = ({ cart, setCart, amountInCart, setAmountInCart, totalPrice }) => {
  // functions to handle quantity inside the cart
  const handleIncrease = (e) => {
    e.quantity += 1;
    setAmountInCart(amountInCart + 1);
  };
  const handleDecrease = (e) => {
    if (e.quantity === 0) return;
    e.quantity -= 1;
    setAmountInCart(amountInCart - 1);
  };

  // deletes entire item
  const handleDelete = (item) => {
    setAmountInCart(amountInCart - item.quantity); // handle quantity
    let newCart = cart.filter((e) => e !== item); // new array without item
    handleCartChange(newCart);
  };

  // memoized = "cached value, so it doesn't need to be recalculated"
  const handleCartChange = useCallback((newCart) => setCart(newCart));

  return (
    <div className="shoppingCart">
      {amountInCart < 1 && (
        <div className="emptyCart">
          <p>Your cart is empty!</p>
          <p>Find something to buy: </p>
          <Link to={"/catalog"} />
        </div>
      )}
      {amountInCart > 0 && (
        <ul>
          <h1>My cart ({amountInCart} items)</h1>
          {cart.map((element) => {
            if (element.quantity === 0) return handleDelete(element);
            return (
              <li key={uniqid()}>
                <Link to={`/catalog/${element.product.id}`}>
                  <img src={element.product.img} alt="product" />
                </Link>
                <div className="description">
                  <Link to={`/catalog/${element.id}`}>
                    <p>{element.name}</p>
                  </Link>
                </div>
                <div
                  onClick={() => {
                    handleDelete(element);
                  }}
                >
                  <p>Remove</p>
                </div>
                <div>
                  <button onClick={() => handleDecrease(element)}>-</button>
                  <button onClick={() => handleIncrease(element)}>+</button>
                </div>
              </li>
            );
          })}
          <div className="totalPrice">
            <h3>Total</h3>
            <div className="subTotal">
              <p>Sub-total</p>
              <div>{totalPrice}</div>
            </div>
            <div className="shipping">
              <p>Shipping:</p>
              <p>FREE!</p>
            </div>
            <div className="total">
              <p>Total: </p>
              <div>${totalPrice}</div>
            </div>
            <Link to="/404">ORDER!</Link>
          </div>
          <div className="paymentMethod">
            <h3>Methods: </h3>
            <div className="icons">{/* card icons */}</div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
