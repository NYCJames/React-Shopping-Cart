import React from "react";

function CartItem({ value }) {
  const { id, productName, price, productImage, qty } = value;

  return (
    <div className="cart-item">
      <img src={productImage} width="512" />
      <div className="description">
        <p>
          <b>
            {id} - {productName}
          </b>
        </p>

        <p>${price}</p>

        <p>{qty}</p>
      </div>
    </div>
  );
}

export default CartItem;
