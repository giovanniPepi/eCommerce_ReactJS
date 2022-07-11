import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Route,
  Link,
  Outlet,
  BrowserRouter,
  Routes,
  HashRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import data from "./data/Data";
import Item from "./components/Item";
import uniqid from "uniqid";

const App = () => {
  const [cart, setCart] = useState([]);
  const [amountInCart, setAmountInCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(cart);
    let price = 0;
    cart.forEach((e) => (price += e.quantity * e.price));
    setTotalPrice(price);
  }, [amountInCart]);

  const handleAddToCart = (e) => {
    let isInCart = false;
    if (cart.length > 0)
      cart.forEach((item) => {
        // adds quantity if the item is previously in the cart
        if (item.id === e.id) {
          item.quantity += 1;
          setAmountInCart(amountInCart + 1);
          isInCart = true;
        }
      });

    if (!isInCart) {
      setCart([...cart, { product: e, quantity: 1, price: e.price }]);
      setAmountInCart(amountInCart + 1);
    }
  };

  return (
    <HashRouter basename="/">
      <Header amountInCart={amountInCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        {data.map((item) => {
          return (
            <Route
              key={uniqid()}
              path={`/catalog/${item.id}`}
              element={<Item item={item} handleAddToCart={handleAddToCart} />}
            />
          );
        })}
        <Route
          path="/shopping-cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              amountInCart={amountInCart}
              setAmountInCart={setAmountInCart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Route not found!</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
