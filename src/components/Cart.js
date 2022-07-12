import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import DeleteIcon from "../img/icons/delete";

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
          <Link to="/catalog">
            <button className="addBtn headerBtn">Catalog</button>
          </Link>
        </div>
      )}
      {amountInCart > 0 && (
        <section className="cartSection">
          <span className="cartTitle">My cart ({amountInCart} items)</span>
          <ul className="cartUl">
            {cart.map((e) => {
              if (e.quantity === 0) return handleDelete(e);
              return (
                <li key={uniqid()} className="cartLi">
                  <Link to={`/catalog/${e.product.id}`}>
                    <img
                      className="itemPageImg imgCart"
                      src={e.product.img}
                      alt="product"
                      onMouseOver={(el) =>
                        (el.currentTarget.src = e.product.imgback)
                      }
                      onMouseOut={(el) =>
                        (el.currentTarget.src = e.product.img)
                      }
                    />
                  </Link>
                  <span>{e.product.name}</span>
                  <span>
                    <strong>Quantity:</strong> {e.product.quantity}
                  </span>
                  <span>
                    <strong>$</strong> {e.product.price * e.quantity}
                  </span>
                  <div className="description">
                    <Link to={`/catalog/${e.id}`}>
                      <p>{e.name}</p>
                    </Link>
                  </div>
                  <div
                    onClick={() => {
                      handleDelete(e);
                    }}
                  >
                    <p>
                      <DeleteIcon />
                    </p>
                  </div>
                  <div>
                    <button
                      className="addBtn"
                      onClick={() => handleDecrease(e)}
                    >
                      -
                    </button>
                    <button
                      className="addBtn"
                      onClick={() => handleIncrease(e)}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
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
        </section>
      )}
    </div>
  );
};

export default Cart;
