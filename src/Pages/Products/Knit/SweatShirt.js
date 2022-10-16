import React from 'react';
const SweatShirt = () => {
  return (
    <div>
      <div className="container mt-5 pt-5 Product-head">
        <h2 className='text-center'>Sweat Shirt</h2>
        <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col ">
            <img
              src="https://i.ibb.co/7vd0zJr/1.jpg"
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