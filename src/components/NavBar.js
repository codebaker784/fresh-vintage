import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../styles.css'
import { links } from "../utils/constants";
import { CartButtons } from "./index";
import { useProductsContext } from "../context/ProductsContext";

const NavBar = () => {
    const { openSidebar } = useProductsContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success-subtle mb-4">
            <div className="container">
                <div className="d-flex align-items-center">
                    <Link className="navbar-brand" to="/">
                        <h2 className="fw-bold fst-italic text-success fs-2">Fresh Vintage</h2>
                    </Link>
                </div>
                
                <div id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 header-nav">
                        {links.map(({ id, text, url, dropdown, submenu }) => (
                            dropdown ? (
                                <li key={id} className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" id={`navbarDropdown${id}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {text}
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${id}`}>
                                        {submenu.map(({ id: subId, text: subText, url: subUrl }) => (
                                            <li key={subId}>
                                                <NavLink className="dropdown-item" to={subUrl}>{subText}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={id} className="nav-item">
                                    <NavLink className="nav-link" to={url}>{text}</NavLink>
                                </li>
                            )
                        ))}
                        <li className='nav-item'>
                            <CartButtons />
                        </li>
                    </ul>
                </div>
                <button type='button' onClick={openSidebar} className='header_btn d-none'>
                    <i className='fa fa-fw fa-bars'></i>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
