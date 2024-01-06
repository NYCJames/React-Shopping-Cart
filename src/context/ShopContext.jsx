import React, { createContext, useState } from "react";

export const ShopContext = createContext(undefined);

function ShopContextProvider(props) {
  // retrieve cart from local storage

  const [shoppingCart, setShoppingCart] = useState(new Map());

  function addToCart(id, qty = 1) {
    // console.log(shoppingCart);
    // console.log(`${id} added to cart`);

    // const newItem = {};
    // newItem[id] = qty;
    // console.log(newItem);

    // setShoppingCart([...shoppingCart, newItem]);

    const newMap = shoppingCart;
    // if (!shoppingCart.get(id)) {
    //   shoppingCart.set(id, 1);
    // } else {
    //   shoppingCart.set(id, shoppingCart.get(id) + 1);
    // }
    shoppingCart.set(id, qty);
    setShoppingCart(newMap);
  }

  return (
    <ShopContext.Provider value={{ addToCart, shoppingCart }}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
