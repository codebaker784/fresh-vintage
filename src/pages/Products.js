import React from "react";

import { Breadcrumb, Filters, Products, Sort } from "../components";

const ProductsPage = () => {
    return (
        <div>
            <Breadcrumb title="products" />
            <div className="content col-xl-12 all-products">
                <Filters />
                <div>
                    <Sort />
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;