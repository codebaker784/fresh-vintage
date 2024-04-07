import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AmountButtons } from ".";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  //? Local State
  const [amount, setAmount] = useState(1);

  //? Handlers
  const increase = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1;
      if (newAmount > 12) {
        newAmount = 12;
      }
      return newAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <Link className="w-50 btn btn-success" to='/cart' id='link' onClick={() => addToCart(product, amount)}>
          Add to cart
        </Link>
    </>
  );
};

export default AddToCart;