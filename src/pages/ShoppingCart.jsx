import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../Products";
import CartItem from "../components/CartItem";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { shoppingCart } = useContext(ShopContext);
  // console.log(shoppingCart);

  const data = [];

  shoppingCart.forEach(function (qty, key) {
    // console.log(qty, key);

    let item = PRODUCTS.filter(function (value) {
      // console.log(value.id === key);
      return value.id === key;
    });
    item[0][`qty`] = qty;
    data.push(...item);
  });

  console.log(data);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cart-items">
        {data.map(function (value) {
          return <CartItem value={value} key={value.id}></CartItem>;
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
