import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { getUniqueValues } from "../utils/helpers";

const Filters = () => {
  const {
    filters: { text, category, min_price, max_price, price },
    updateFilters,
    all_products: products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(products, "category");

  if (products.length > 0) {
    return (
      <div className="filters">
        <div className='filter-content'>
          <form className='filter_form' onSubmit={(e) => e.preventDefault()}>
            <div className='form_control'>
              <input type='text' name='text' placeholder='Search' className='search_input' value={text} onChange={updateFilters} />
            </div>
            <div className='form_control'>
              <h4>Categories</h4>
              <div className='form_categories'>
                {categories.map((c, index) => (
                  <button key={index} type='button' name='category' className={`btn ${category === c ? "active" : ""}`} onClick={updateFilters} data-category={c} >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className='form_control'>
              <h4>Price</h4>
              <p className='price'>${price}</p>
              <input type='range' name='price' min={min_price} max={max_price} value={price} onChange={updateFilters} />
            </div>
          </form>
          <button className="btn btn-secondary" onClick={clearFilters} >
            Reset Filters
          </button>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Filters;