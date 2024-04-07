import React from "react";
import { Link } from "react-router-dom";

import {
    Breadcrumb,
    CartItem,
    CartTotals,
    EmptyCart,
} from "../components";

import { useCartContext } from "../context/CartContext";

const CartPage = () => {
    const { cart, clearCart } = useCartContext();

    if (cart.length < 1) {
        return <EmptyCart />;
    }

    return (
        <main>
            <Breadcrumb title='Cart' />
            <div className="row content">
                <div className="col-lg-8">
                    <div className='content cart'>
                        <div className='cart-content'>
                            <div className='cart_items'>
                                {cart.map((item) => (
                                    <CartItem key={item.id} {...item} />
                                ))}
                            </div>
                            <div className='cart_links'>
                                <Link className="btn btn-success" to='/products'>Buy more</Link>
                                <button className='btn btn-secondary' onClick={clearCart} >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 border border-success rounded border-3">
                    <CartTotals />
                </div>
            </div>
        </main>
    );
};

export default CartPage;