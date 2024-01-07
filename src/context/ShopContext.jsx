import React, { createContext, useState } from "react";
// import { PRODUCTS } from "../Products";

export const ShopContext = createContext(undefined);

function ShopContextProvider(props) {
  // retrieve cart from local storage

  const [shoppingCart, setShoppingCart] = useState(
    retrieveFromLocal() || new Map()
  );

  function retrieveFromLocal() {
    return new Map(JSON.parse(localStorage.getItem(`shoppingCart`)));
  }

  //   function pushToLocal(data) {
  //     localStorage.setItem(`shoppingCart`, JSON.stringify(data));
  //   }

  function addToCart(id, qty = 1) {
    // console.log(shoppingCart);
    // console.log(`${id} added to cart`);

    // const newItem = {};
    // newItem[id] = qty;
    // console.log(newItem);

    // setShoppingCart([...shoppingCart, newItem]);

    const newMap = new Map(shoppingCart);
    // if (!shoppingCart.get(id)) {
    //   shoppingCart.set(id, 1);
    // } else {
    //   shoppingCart.set(id, shoppingCart.get(id) + 1);
    // }
    if (qty === 0) {
      newMap.delete(id);
    } else {
      newMap.set(id, qty);
    }
    setShoppingCart(newMap);

    // console.log(shoppingCart);

    // pushToLocal(newMap);
    // console.log(JSON.stringify([...newMap]));
    localStorage.setItem(`shoppingCart`, JSON.stringify([...newMap]));
    // console.log(JSON.parse(localStorage.getItem(`cart`)));
    console.log(new Map(JSON.parse(localStorage.getItem(`shoppingCart`))));
    return newMap;
  }

  // function getTotalPrice() {
  //   let totalPrice = 0;

  //   for (item in shoppingCart) {
  //     console.log(item);
  //     // let itemPrice = PRODUCTS.find(function (value) {
  //     // value.id === shoppingCart;
  //     // });
  //   }

  //   return totalPrice;
  // }

  return (
    <ShopContext.Provider value={{ addToCart, shoppingCart }}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
