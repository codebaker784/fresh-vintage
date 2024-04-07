import React from "react";
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
    return (
        <div className='content'>
            <div className="row text-center checkout-success d-flex align-items-center">
                <h2 className="text-success">Thank you for shopping with us!</h2>
                <Link className="btn btn-lg btn-success w-50 mx-auto" to='/'>Return to Home</Link>
            </div>
        </div>
    );
};

export default CheckoutSuccess;