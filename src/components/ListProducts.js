import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../utils/helpers";

const ListProducts = ({ products }) => {
  return (
    <div className="listProducts">
      {products.map(({ title, image, id, price, description }) => (
        <article key={id}>
          <div className='product_img'>
            <img src={image} alt={title} />
          </div>
          <div className='product_info'>
            <h3>{title}</h3>
            <p className='price'>${price}</p>
            <p>{truncate(description, 120)}</p>
            <Link className="btn btn-success w-50" to={`/products/${id}`}>Details</Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ListProducts;