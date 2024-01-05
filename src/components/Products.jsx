import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Products({ item }) {
  // console.log(item);
  const { id, productName, price, productImage } = item;
  const { addToCart, shoppingCart } = useContext(ShopContext);
  // console.log(shoppingCart);
  // let cartAmount;
  const [cartAmount, setCartAmount] = useState(shoppingCart.get(id));

  function handleAddToCart(event) {
    // console.log(event.target.parentElement.id);
    const id = Number(event.target.parentElement.id);

    addToCart(id);
    setCartAmount(shoppingCart.get(id));

    // change button go to cart?
    console.log(shoppingCart.get(id));
  }

  // cartAmount = shoppingCart.get(id);
  return (
    <div className="product" id={id}>
      <img src={productImage} alt="" className="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>

        <p>${price}</p>
      </div>

      <button type="button" className="addToCartBtn" onClick={handleAddToCart}>
        {cartAmount > 0 ? `${cartAmount} in Cart` : `Add to Cart`}
      </button>
    </div>
  );
}

export default Products;
