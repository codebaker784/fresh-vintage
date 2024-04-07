import React from "react";

const Error = () => {
    return (
        <div className="p-3 d-flex align-items-center justify-content-center text-danger fw-bold">
            <div className="container">
                <div className="content">
                    <div className="row justify-content-between">
                    <div className="product-col">
                            <img src={"../images/404.svg"} alt="product"/>
                        </div>
                        <div className="col-single">
                            <h3 id="details">An Error Occured While Processing. Please Try Again.</h3>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Error;