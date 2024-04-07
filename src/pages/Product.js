import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductsContext";
import { Breadcrumb, Error, Loading, Ratings, AddToCart, } from "../components";


const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const {
        single_product: product,
        single_product_loading: loading,
        single_product_error: error,
        fetchSingleProduct,
    } = useProductsContext();

    const { title, price, image, category, description, rating } = product;

    useEffect(() => {
        fetchSingleProduct(id);
    }, [id]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
    }, [error]);

    if (loading) {
        return (
            <div className='page-w-b'>
                <Loading />
            </div>
        );
    }

    if (error) {
        return (
            <div className='page-w-b'>
                <Error />
            </div>
        );
    }

    return (
        <main>
            <Breadcrumb title={title} products />
            <div className='container d-flex align-items-center justify-content-center'>
                <article className="px-3 py-2 d-grid justify-content-center">
                    <div className='product_img'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='product_info ps-3'>
                        <Link className="w-50 btn btn-outline-danger" to='/products'>Back To Products</Link>

                        <h2>{title}</h2>
                        <Ratings rating={rating} />
                        <p className='fs-5 info_price'>
                            Price : <span>${price}</span>
                        </p>
                        <p className='fs-5 info_category'>
                            Category : <span className="text-capitalize">{category}</span>
                        </p>
                        <p>{description}</p>
                        <AddToCart product={product} />
                    </div>
                </article>
            </div>
        </main>
    );
};

export default Product;