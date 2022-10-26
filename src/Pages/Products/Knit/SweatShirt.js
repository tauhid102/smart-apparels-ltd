import React from 'react';
import image1 from "../../../images/Knit/Sweat-shirt/1.jpeg";
const SweatShirt = () => {
  return (
    <div>
      <div className="container mt-5 pt-5 Product-head">
        <h2 className='text-center'>Sweat Shirt</h2>
        <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col ">
            <img
              src={image1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweatShirt;