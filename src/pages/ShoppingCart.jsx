import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../Products";
import CartItem from "../components/CartItem";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { shoppingCart } = useContext(ShopContext);
  // console.log(shoppingCart);
  const [cartData, setCartData] = useState([]);

  useEffect(
    function () {
      const items = PRODUCTS.filter(function (value) {
        // console.log(shoppingCart.has(value.id));
        return shoppingCart.has(value.id);
      });
      setCartData(items);
    },
    [shoppingCart]
  );

  // const data = [];
  // shoppingCart.forEach(function (qty, key) {
  //   // console.log(qty, key);

  //   let item = PRODUCTS.filter(function (value) {
  //     // console.log(value.id === key);
  //     return value.id === key;
  //   });
  //   // console.log(item);
  //   // item[0][`qty`] = qty;
  //   data.push(...item);
  //   // setData(...item);
  // });

  console.log(cartData);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cart-items">
        {cartData.map(function (value) {
          if (shoppingCart.get(value.id) > 0) {
            return <CartItem value={value} key={value.id}></CartItem>;
          }
        })}
      </div>
    </div>
  );
}

export default ShoppingCart;
