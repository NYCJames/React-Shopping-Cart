import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { PRODUCTS } from "../Products";
import CartItem from "../components/CartItem";
import "./ShoppingCart.css";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
  const { shoppingCart } = useContext(ShopContext);
  // console.log(shoppingCart);
  const [cartData, setCartData] = useState([]);
  //total
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(
    function () {
      let runningTotal = 0;
      const items = PRODUCTS.filter(function (value) {
        // console.log(shoppingCart.has(value.id));
        if (shoppingCart.has(value.id)) {
          // console.log(runningTotal, shoppingCart.get(value.id) * value.price);
          // setTotal(total + shoppingCart.get(value.id) * value.price);
          runningTotal =
            runningTotal + shoppingCart.get(value.id) * value.price;
        }
        return shoppingCart.has(value.id);
      });
      // update total
      // console.log(items);
      setCartData(items);
      console.log(runningTotal);
      setTotal(runningTotal);
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

  // console.log(cartData);
  // console.log(total);

  function handleGoToShop() {
    navigate(`/`);
  }

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

        {total > 0 ? (
          <div className="checkout">
            <p>Subtotal: ${total}</p>
            <button onClick={handleGoToShop}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <div className="no-items">
            <h1>No items in cart</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
