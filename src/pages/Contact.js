import React, { useState } from 'react';
import '../styles.css';
import { Breadcrumb } from '../components'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
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
        // Here you can add code to handle form submission, such as sending the data to a server
        console.log(formData);
        // Reset form data after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container">
            <div className="content">
                <Breadcrumb title="Contact" />
                <div className="row mt-5">
                    <div className="product-col">
                        <img src={"./images/log.svg"} alt="contact" />
                    </div>
                    <div className="sign-col">
                        <h4 className='text-success'>Located in the heart of downtown Lorien.</h4>
                        <p>Fresh Vintage is located on Golden Leaves Street in historic downtown Lorien. 
                            We are just minutes away from Cerin Amroth and the beautiful Nimrodel river.</p>

                        <h5 className='text-success'>Hours</h5>
                        <p>Our store is open Tuesday to Saturday from 10:00am - 5:00pm, closed on Sundays and Mondays.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 d-flex">
                                <input type="text" className="form-control me-2" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="6" placeholder="Message" name="message" value={formData.message} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <div className="me-3">
                            <a className="text-decoration-none text-success-emphasis" href="https://github.com/codebaker784" rel="noreferrer" target="_blank">
                                <i className="fab fa-facebook"></i> Facebook
                            </a>
                        </div>
                        <div className="me-3">
                            <a className="text-decoration-none text-success-emphasis" href="https://github.com/codebaker784" rel="noreferrer" target="_blank">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                        <div className="me-3 text-decoration-none text-success-emphasis">
                            <i className="fa fa-at"></i> info@freshvintage.com
                        </div>
                        <div className="text-decoration-none text-success-emphasis">
                            <i className="fa fa-phone"></i> +123 452 1324
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;