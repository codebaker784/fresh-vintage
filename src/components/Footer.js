import React from 'react'
import '../styles.css'
import {Link} from 'react-router-dom'

const Footer = () =>{
    return (
        <div className="footer">
            <div className="container my-2">
                <div className="row">
                    <div className="col-4">
                        <h3 className="text-success">About</h3>
                        <p>Fresh Vintage is inspired by years growing up along the Anduin river in beautiful Lothlorien, canoeing, walking the woods, gathering with family, exploring attics, and travelling along Rohan and Mirkwood, all the way to Erebor and back, in search of “treasure” at auctions, shops and flea markets.</p>
                    </div>
                    <div className="col-4">
                        <h3 className="text-success">Links</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/"><i className="fa fa-fw fa-house"></i> Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/products"><i className="fa fa-fw fa-list"></i> Products</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/sign-up"><i className="fa fa-fw fa-id-card"></i> Sign Up</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/sign-in"><i className="fa fa-fw fa-user"></i>Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h3 className="text-success">Follow</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="https://github.com/codebaker784" rel="noreferrer" target="_blank">
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://github.com/codebaker784" rel="noreferrer" target="_blank">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <br/>
                <p className="copyright text-center fw-bold fs-5 mb-3 text-success-emphasis">Copyright Fresh Vintage &copy; {( new Date().getFullYear())}</p>
            </div>
        </div>
    )
}

export default Footer