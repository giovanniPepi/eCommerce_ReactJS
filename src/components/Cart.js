import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import DeleteIcon from "../img/icons/delete";
import MinusIcon from "../img/icons/minus";
import AddIcon from "../img/icons/plus";
import payment from "../img/icons/payment.png";

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
                  <span className="cartDesc">{e.product.name}</span>
                  <span>
                    <strong>Quantity:</strong> {e.quantity}
                  </span>
                  <span>
                    <strong>$</strong> {e.product.price * e.quantity}
                  </span>
                  <div className="description">
                    <Link to={`/catalog/${e.id}`}>
                      <p>{e.name}</p>
                    </Link>
                  </div>
                  <div className="buttonsCart">
                    <button
                      className="cartAdd"
                      onClick={() => {
                        handleDelete(e);
                      }}
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className="cartAdd"
                      onClick={() => handleDecrease(e)}
                    >
                      <AddIcon />
                    </button>
                    <button
                      className="cartAdd"
                      onClick={() => handleIncrease(e)}
                    >
                      <MinusIcon />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="totalCart">
            <p className="totalSpan">Order summary</p>
            <span className="subTotal">Sub-total: {totalPrice}</span>
            <div className="shipping">
              Shipping:
              <p className="shippingFeeBefore">$ 34.99</p>
              <p className="shippingFee">FREE!</p>
            </div>
            <p className="total">Total: </p>
            <p>${totalPrice}</p>
            <div className="paymentMethod">
              <p>Payment options: </p>
              <div className="cardIcons">
                <img
                  className="void"
                  src={payment}
                  alt="paymentOptions"
                  width="300"
                  height="30"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
