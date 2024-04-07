import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartCheckout } from "../components";

const Checkout = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // "Fake" submission, redirect to "success" page after submission
        navigate('/checkoutSuccess');
    };

    return (
        <div className="container">
            <h2 className='text-success mb-3'>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h4>Billing Details</h4>
                        <div>
                            <label htmlFor="fullName">Full Name:</label>
                            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <textarea className="h-auto w-100" rows="3" id="address" name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h4>Card Details</h4>
                        <label htmlFor="cardNumber">Card Number:</label>
                        <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='offset-lg-6 col-lg-6 justify-content-end'>
                        <CartCheckout />                    
                        <button className="float-end btn btn-success w-50" type="submit">Place Order</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;