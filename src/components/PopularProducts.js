import React from "react";
import { useProductsContext } from "../context/ProductsContext";
import { GridProducts, Loading, Error } from ".";

const PopularProducts = () => {
  const {
    popular_products: products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="h-auto p-3">
      <h2 className="mb-3 text-center text-success">Most Popular Products</h2>
      <GridProducts products={products.slice(0, 3)} />
    </div>
  );
};

export default PopularProducts;