import React from "react";

function Products({ item }) {
  // console.log(item);

  const { id, productName, price, productImage } = item;

  return (
    <div className="product">
      <img src={productImage} alt="" width="256" className="description" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>

        <p>${price}</p>
      </div>
    </div>
  );
}

export default Products;
