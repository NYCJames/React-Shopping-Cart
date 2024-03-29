import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { TbTrash } from "react-icons/tb";

function Products({ item }) {
  const { id, productName, price, productImage } = item;
  const { addToCart, shoppingCart } = useContext(ShopContext);

  // const cartAmount = shoppingCart.get(id);
  const [cartAmount, setCartAmount] = useState(shoppingCart.get(id));

  function handleAddToCart() {
    // console.log(event.target.parentElement.id);
    // const id = Number(event.target.parentElement.id);

    const newMap = addToCart(id);
    setCartAmount(newMap.get(id));

    // change button go to cart?
    // console.log(shoppingCart.get(id));
    // console.log(cartAmount);
  }

  function handleCartChange(event) {
    // console.log(event);
    const newQty = Number(event.target.value);
    // console.log(id, newQty);

    const newMap = addToCart(id, newQty);
    setCartAmount(newMap.get(id));
  }

  function handleSubtractCart(event) {
    console.log(event.target.nextElementSibling.value);
    const newQty = Number(event.target.nextElementSibling.value) - 1;

    const newMap = addToCart(id, newQty);
    setCartAmount(newMap.get(id));
  }

  function handleAddCart(event) {
    // console.log(event.target.parentElement.children[1].value);
    const newQty = Number(event.target.parentElement.children[1].value) + 1;

    const newMap = addToCart(id, newQty);
    setCartAmount(newMap.get(id));
  }

  function handleRemoveFromCart() {
    // console.log(event.currentTarget.parentElement.children[1].value);
    // const newQty = 0

    const newMap = addToCart(id, 0);
    setCartAmount(newMap.get(id));
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

      {/* <button type="button" className="addToCartBtn" onClick={handleAddToCart}>
        {cartAmount > 0 ? `${cartAmount} in Cart` : `Add to Cart`}
      </button> */}

      {cartAmount > 0 ? (
        <div className="count-handler">
          <button onClick={handleSubtractCart}>-</button>
          <input value={cartAmount} onChange={handleCartChange}></input>
          <button onClick={handleAddCart}>+</button> in Cart
          <button onClick={handleRemoveFromCart}>
            <TbTrash />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="addToCartBtn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}

      {cartAmount > 0 ? `` : ``}
    </div>
  );
}

export default Products;
