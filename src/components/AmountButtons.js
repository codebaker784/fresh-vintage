import React from "react";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="amount-buttons">
      <button type='button' className={`btn ${amount < 2 ? "opacity" : ""}`} onClick={decrease} >
        <i className="fa fa-fw fa-minus text-danger"></i>
      </button>
      <span>{amount}</span>
      <button type='button' className={`btn ${amount > 11 ? "opacity" : ""}`} onClick={increase}>
        <i className="fa fa-fw fa-plus text-success"></i>
      </button>
    </div>
  );
};
export default AmountButtons;