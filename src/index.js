import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';

// Contexts
import { ProductsProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

const root = document.getElementById("root");
const rootElement = (
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
);

const rootContainer = createRoot(root);
rootContainer.render(rootElement);