import React from 'react'

const Ratings = ({ ratings = { rate: "" } }) => {
    const { rate } = ratings;

    const tempRating = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                {
                    rate >= index + 1 ? (
                        <i className='fa fa-fw fa-star'></i>
                    ) : rate >= number ? (
                        <i className='fa fa-fw fa-star-half-stroke'></i>
                    ) : (
                        <i className='fa fa-fw fa-star'></i>
                    )
                }
            </span>
        );
    });

    return <div className='fs-5 text-success'>{tempRating}</div>;
};

export default Ratings
