import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Products({ item }) {
  // console.log(item);

  const { id, productName, price, productImage } = item;
  const { shoppingCart, addToCart } = useContext(ShopContext);
  // console.log(shoppingCart);

  return (
    <div className="product">
      <img src={productImage} alt="" className="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>

        <p>${price}</p>
      </div>

      <button className="addToCartBtn">Add to Cart</button>
    </div>
  );
}

export default Products;
