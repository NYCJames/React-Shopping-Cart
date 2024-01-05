import React from "react";
import { PRODUCTS } from "../Products";
import Products from "../components/Products";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shop-title">
        <h1>Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map(function (item) {
          return <Products key={item.id} item={item}></Products>;
        })}
      </div>
    </div>
  );
}

export default Shop;
