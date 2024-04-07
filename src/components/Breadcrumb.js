import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../utils/helpers";

const Breadcrumb = ({ title, products }) => {
    return (
        <div className="breadcrumb">
            <Link to='/'> Home /</Link>
            { products && <Link to='/products'> Products / </Link> }
            <span className="text-capitalize">{truncate(title, 20)} </span>
        </div>
    );
};

export default Breadcrumb;