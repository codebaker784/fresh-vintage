import React from "react";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();

  return (
    <div className="row mb-3 justify-content-between">
      <div className="col-md-4">
        <div className="views btn-group" role="group">
          <button type="button" onClick={setGridView} className={`btn btn-outline-success ${grid_view ? "active" : ""}`}>
            <span className="btn-span"><i className="fa fa-th-large"></i></span>
          </button>
          <button type="button" onClick={setListView} className={`btn btn-outline-success ${!grid_view ? "active" : ""}`}>
            <span className="btn-span"><i className="fa fa-list"></i></span>
          </button>
        </div>
      </div>
      <div className="col-md-4">
        <p className='sort_items'>
          <span className="fw-bold">{products.length}</span> items found
        </p>
      </div>
      <div className="col-md-4 d-flex align-items-center justify-content-end pe-0">
        <label className="col-auto text-end me-1 form-label fw-bold text-success" htmlFor='sort'>Sort By: </label>        
        <form className='d-flex align-items-center'>
          <select name='sort' id='sort' className='form-control col-auto form-select' value={sort} onChange={updateSort} >
            <option value='price-lowest'>Price (Low to High)</option>
            <option value='price-highest'>Price (High to Low)</option>
            <option value='name-a'>Name (A - Z)</option>
            <option value='name-z'>Name (Z - A)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;