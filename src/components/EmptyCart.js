import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <main>
      <div className='page-w-b d-grid'>
        <div className='text-center'>
          <h2 className="mb-3">
            Your cart is <span className="text-danger fw-bold">empty</span>
          </h2>
          <Link className="btn btn-success" to='/products'>Shop Now</Link>
        </div>
      </div>
    </main>
  );
};

export default EmptyCart;