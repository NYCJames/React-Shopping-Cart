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

        <div className="count-handler">
          <button>-</button>
          <p>{qty}</p>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
