import React from 'react';

const Hoody = () => {
  return (
    <div>
      <div className="container mt-5 pt-5 Product-head">
        <h2 className='text-center'>Hoody</h2>
        <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <img
              src="https://i.ibb.co/NjVsgwQ/4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="https://i.ibb.co/TwtJz55/3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
          <div className="col">
            <img
              src="https://i.ibb.co/VMSz8ZH/2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
          </div>
          <div className="col">
          <img
              src="https://i.ibb.co/j42M92C/1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoody;