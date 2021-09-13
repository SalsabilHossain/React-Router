import React from "react";
import slide from "../Images/hero-2.jpg";
import hero from "../Images/hero-1.jpg";
import "./Carousel.css";
import bootstrap from "bootstrap";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src={hero} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src={slide} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="container">
                <h1 className="title">Some Text</h1>
                <div className="content">Lorem wejwejijejej</div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
