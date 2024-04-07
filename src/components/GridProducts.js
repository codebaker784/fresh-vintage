import React from "react";
import { Link } from "react-router-dom";
import { truncate } from "../utils/helpers";
import { Ratings } from ".";

const GridProducts = ({ products }) => {
  return (
    <div className="gridProducts">
      {products.map(({ title, id, image, price, rating }) => (
        <div className="card" key={id}>
          <div className="card-img">
            <Link to={`/products/${id}`}>
              <img src={image} alt={title}/>
            </Link>
          </div>
          <div className="card-body">
            <h3 className="card-title" title={title}>{truncate(title, 20)}</h3>
            <div>
              <p>${price}</p>
              <Ratings ratings={rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridProducts;