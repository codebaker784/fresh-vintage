import React from 'react'
import { SliderData } from '../utils/constants'
import { PopularProducts } from "../components";
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import '../styles.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container'>
            <div id="homeCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {SliderData.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#homeCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {SliderData.map((slide, index) => (
                        <div key={slide.id} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                            <img src={slide.cover} className="d-block w-100" alt="slide" style={{ objectFit: 'cover', height: '400px' }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h3>{slide.title}</h3>
                                <p className="fst-italic fw-bold fs-5">{slide.desc}</p>
                                <Link to="/products" className="btn btn-lg btn-outline-success bg-light">
                                    Winter Collection
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <PopularProducts />
        </div>
    );
}

export default Home;