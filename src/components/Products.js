import React from "react";

import { GridProducts, ListProducts } from ".";

import { useProductsContext } from "../context/ProductsContext";
import { useFilterContext } from "../context/FilterContext";

import { Loading, Error } from ".";
const Products = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const {
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (products.length < 1) {
    return (
      <h4>Sorry, no products matched your search...</h4>
    );
  }

  if (grid_view === false) {
    return <ListProducts products={products} />;
  }
  return <GridProducts products={products} />;
};

export default Products;