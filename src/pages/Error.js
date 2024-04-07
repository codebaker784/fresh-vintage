import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="page-w-b">
        <h2 className="fw-bold text-danger">404</h2>
        <h4>Page Not Found</h4>
        <button className="btn btn-secondary">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;