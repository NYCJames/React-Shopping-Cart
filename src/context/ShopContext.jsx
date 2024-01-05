import React, { createContext, useState } from "react";

export const ShopContext = createContext(undefined);

function ShopContextProvider(props) {
  const [shoppingCart, setShoppingCart] = useState({});

  function addToCart() {
    console.log(`add to cart`);

    setShoppingCart([`test`]);
  }

  return (
    <ShopContext.Provider value={{ addToCart, shoppingCart }}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
