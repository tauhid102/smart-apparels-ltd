import React from "react";

const Jogger = () => {
  return (
    <div>
      <div className="container mt-5 pt-5 Product-head">
        <h2 className="text-center">Jogger</h2>
        <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col ">
            <img
              src="https://i.ibb.co/9cLkVSg/4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://i.ibb.co/yqgnWqq/3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col ">
            <img
              src="https://i.ibb.co/p1WbNMQ/2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
          </div>

          <div className="col ">
          <img
              src="https://i.ibb.co/0VR7zTm/1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jogger;
