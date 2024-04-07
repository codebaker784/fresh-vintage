import React from "react";
import { Route, Routes } from "react-router-dom";

import { Loading } from "../components";

const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Error = React.lazy(() => import("../pages/Error"));
const Product = React.lazy(() => import("../pages/Product"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Checkout = React.lazy(() => import("../pages/Checkout"));
const CheckoutSuccess = React.lazy(() => import("../pages/CheckoutSuccess"));
const SignUp = React.lazy(() => import("../pages/SignUp"));
const SignIn = React.lazy(() => import("../pages/SignIn"));

const ConfigureRoutes = () => {
    return (
        <React.Suspense fallback={<Loading lazy />}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Error />} />
        </Routes>
        </React.Suspense>
    );
};

export default ConfigureRoutes;