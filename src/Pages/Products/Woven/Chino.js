import React from 'react';
import image1 from "../../../images/Woven/Chino/1.jpg";
import image2 from "../../../images/Woven/Chino/2.jpg";
const Chino = () => {
    return (
        <div>
            <div className="container mt-5 pt-5 Product-head">
                <h2 className='text-center'>Chino</h2>
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
                </div>
            </div>
        </div>
    );
};

export default Chino;