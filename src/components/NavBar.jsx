import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="cart">
            <TbShoppingCart size={32} />
          </Link>
        </div>
      </div>

      <Outlet></Outlet>
    </>
  );
}

export default NavBar;
