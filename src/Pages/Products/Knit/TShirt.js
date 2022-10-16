import React from "react";

const TShirt = () => {
  return (
    <div>
      <div className="container mt-5 pt-5 Product-head">
          <h2 className='text-center'>T-Shirt</h2>
        <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <img
              src="https://i.ibb.co/BfCc0WG/5.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="https://i.ibb.co/51g6Z0Q/4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col">
            <img
              src="https://i.ibb.co/r67NcZ1/3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://i.ibb.co/R49jGRk/1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col">
            <img
              src="https://i.ibb.co/RgGn6MS/2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirt;
