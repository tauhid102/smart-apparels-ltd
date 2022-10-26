import React from "react";
import "../../Style/Style.css";
import image1 from "../../../images/Knit/Polo-shirt/1.jpg";
import image2 from "../../../images/Knit/Polo-shirt/2.jpg";
import image3 from "../../../images/Knit/Polo-shirt/3.jpg";
const PoloShirt = () => {
  return (
    <>
      <div className="container mt-5 pt-5 Product-head">
        <h2 className="text-center">Polo-Shirt</h2>
        <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col ">
            <img
              src={image1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

          </div>

          <div className="col ">
            <img
              src={image2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
          </div>
          <div className="col ">
            
          <img
              src={image3}
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
