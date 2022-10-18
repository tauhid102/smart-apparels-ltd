import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://i.ibb.co/k6m7z9L/5-s.jpg"
            className="d-block w-100"
            alt="..."
            height="620px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3><span>Quality is our priority</span></h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/QK3Pyp4/12-s.jpg"
            className="d-block w-100"
            alt="..."
            height="600px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3><span>We do in time shipment</span></h3>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/WcFFnTr/11-s.jpg"
            className="d-block w-100"
            alt="..."
            height="600px"
          />
          <div className="carousel-caption d-none d-md-block">
            <h3><span>We have good relation with our supplier</span></h3>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Slider;
