import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../utils/helpers";
import { AmountButtons } from ".";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ title, price, amount, id, image }) => {
  const { toggleAmount, removeItem } = useCartContext();
  //? Handlers
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <div className="cart-items">
      <div className='item_img'>
        <img src={image} alt={title} />
      </div>
      <div className='item_info'>
        <div className="row">
          <Link to={`/products/${id}`} title={title}>
            {truncate(title, 30)}
          </Link>
        </div>
        <div className="row">
          <p className="fs-5">
            ${price} &#9747; {amount} :
            <br />
            <span className="text-info fw-bold">${(price * amount).toFixed(2)}</span>
          </p>
        </div>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <button className={`btn ${amount < 2 ? "item_delete active" : "item_delete "}`} onClick={() => removeItem(id)} >
        <i className="fa fa-fw fa-trash fw-bold text-danger" />
      </button>
    </div>
  );
};

export default CartItem;