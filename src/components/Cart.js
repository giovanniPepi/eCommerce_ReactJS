import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import DeleteIcon from "../img/icons/delete";
import MinusIcon from "../img/icons/minus";
import AddIcon from "../img/icons/plus";
import payment from "../img/icons/payment.png";

const Cart = ({
  cart,
  setCart,
  amountInCart,
  setAmountInCart,
  totalPrice,
  handleIncrease,
  handleDecrease,
}) => {
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
                  <Link to={`/catalog/${e.product.id}`}>
                    <span className="cartDesc">{e.product.name}</span>
                  </Link>
                  <span>
                    <strong>Quantity:</strong> {e.quantity}
                  </span>
                  <span>
                    <strong>$</strong>{" "}
                    {(e.product.price * e.quantity).toFixed(2)}
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
                      onClick={() => handleIncrease(e)}
                    >
                      <AddIcon />
                    </button>
                    <button
                      className="cartAdd"
                      onClick={() => handleDecrease(e)}
                    >
                      <MinusIcon />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="totalSpan">Order summary</p>
          <div className="totalCart">
            <div className="subTotalContainer">
              <p className="subTotal">
                <strong>Sub-total </strong>
              </p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="shipping">
              <p>
                <strong>Shipping</strong>
              </p>
              <p className="shippingFee">
                <span className="shippingBefore">$ 34.99</span>FREE!
              </p>
            </div>
            <div className="totalContainer">
              <p className="total">
                <strong>Total </strong>
              </p>
              <span className="totalPrice">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="totalContainer">
              <p className="total">
                <strong>Total - Member discount!</strong>
              </p>
              <span className="totalPrice">
                ${(totalPrice * 0.97).toFixed(2)}
              </span>
            </div>
            <div className="paymentMethods">
              <p>
                <strong>Payment options: </strong>
              </p>
              <img
                className="cardIcons void"
                src={payment}
                alt="paymentOptions"
                width="300"
                height="30"
              />
            </div>
            <Link to="/">
              <button className="addBtn finishBtn">Proceed to Payment</button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
