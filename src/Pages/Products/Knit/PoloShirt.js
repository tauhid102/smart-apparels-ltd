import React from "react";
import "../../Style/Style.css";
const PoloShirt = () => {
  return (
    <>
      <div className="container mt-5 pt-5 Product-head">
        <h2 className="text-center">Polo-Shirt</h2>
        <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col ">
            <img
              src="https://i.ibb.co/xJwxm93/3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

          </div>

          <div className="col ">
            <img
              src="https://i.ibb.co/cF1x0h4/1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
          </div>
          <div className="col ">
            
          <img
              src="https://i.ibb.co/FXsc8p6/2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PoloShirt;
