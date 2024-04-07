import React from "react";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { useCartContext } from "../context/CartContext";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();

  return (
    <div className="cart-buttons d-flex align-items-center">
      <NavLink
        to='/cart'
        onClick={closeSidebar}
        className={({ isActive }) => isActive ? "cart_container active border-success" : "cart_container" }
      >
        <div className='cart-icon'>
          <i className="fa fa-fw fa-cart-shopping"></i>
          <span>{total_items}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default CartButtons;