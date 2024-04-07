import React from "react";
import { useCartContext } from "../context/CartContext";

const CartCheckout = () => {
    const { total_items, total_price, total_tax, total_shipping } = useCartContext();
    return (
        <div className="cart-totals p-3">
            <div className="px-3 py-4">
                <div className='total_items fs-5 row'>
                <label className="fw-bold col">Total Items: </label> <span className="col text-end">{total_items}</span>
                </div>
                <div className='total_tax fs-5 row'>
                <label className="fw-bold col">Tax (GST/HST): </label> <span className="col text-end">${total_tax.toFixed(2)}</span>
                </div>
                <div className='total_shipping fs-5 row'>
                <label className="fw-bold col">Shipping Fee: </label> <span className="col text-end">${total_shipping.toFixed(2)}</span>
                </div>
                <div className='total_price fs-5 row'>
                <label className="fw-bold col">Total Price: </label> <span className="col text-end">${total_price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartCheckout;