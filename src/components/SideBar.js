import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import { CartButtons } from ".";
import { useProductsContext } from "../context/ProductsContext";

const SideBar = () => {
    const { closeSidebar, isSidebarOpen } = useProductsContext();

    return (
        <div>
            <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
                <div className='sidebar-header'>
                    <Link to='/' onClick={closeSidebar}>
                        <i className="fa fa-fw fa-store"></i>
                    </Link>
                    <button type='button' onClick={closeSidebar}>
                        <i className="fa fa-fw fa-store"></i>
                    </button>
                </div>
                <nav className='sidebar_nav'>
                    <ul>
                        {links.map(({ id, url, text, dropdown, submenu }) => (
                            <li key={id}>
                                {dropdown ? (
                                    <div>
                                        <span>{text}</span>
                                        <ul>
                                            {submenu.map(({ id: submenuId, url: submenuUrl, text: submenuText }) => (
                                                <li key={submenuId}>
                                                    <NavLink to={submenuUrl} onClick={closeSidebar} >
                                                        {submenuText}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <NavLink className={({ isActive }) => (isActive ? "active" : null)} to={url} onClick={closeSidebar} >
                                        {text}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='sidebar_cart'>
                    <CartButtons />
                </div>
            </aside>
        </div>
    );
};

export default SideBar;