import React, { useContext, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

function CartItem({ value }) {
  const { id, productName, price, productImage, qty } = value;
  const { addToCart, shoppingCart } = useContext(ShopContext);

  const [cartAmount, setCartAmount] = useState(shoppingCart.get(id));

  function handleCartChange(event) {
    // console.log(event);
    const newQty = Number(event.target.value);
    // console.log(id, newQty);

    addToCart(id, newQty);
    setCartAmount(shoppingCart.get(id));
  }

  function handleSubtractCart(event) {
    console.log(event.target.nextElementSibling.value);
    const newQty = Number(event.target.nextElementSibling.value) - 1;

    addToCart(id, newQty);
    setCartAmount(shoppingCart.get(id));
  }

  function handleAddCart(event) {
    // console.log(event.target.parentElement.children[1].value);
    const newQty = Number(event.target.parentElement.children[1].value) + 1;

    addToCart(id, newQty);
    setCartAmount(shoppingCart.get(id));
  }

  function handleRemoveFromCart() {
    // console.log(event.currentTarget.parentElement.children[1].value);
    // const newQty = 0

    addToCart(id, 0);
    setCartAmount(shoppingCart.get(id));
  }

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
          <button onClick={handleSubtractCart}>-</button>
          <input value={cartAmount} onChange={handleCartChange}></input>
          <button onClick={handleAddCart}>+</button>
          <button onClick={handleRemoveFromCart}>
            <TbTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
