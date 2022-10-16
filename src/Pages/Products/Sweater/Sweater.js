import React from 'react';
const Sweater = () => {
    return (
        <div>
            <div className="container mt-5 pt-5 Product-head">
                <h2 className='text-center'>Sweater</h2>
                <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col ">
                        <img
                            src="https://i.ibb.co/7VZCXJJ/3.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    <div className="col ">
                        <img
                            src="https://i.ibb.co/ZMvKtz8/2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                    </div>
                    <div className="col ">
                        <img
                            src="https://i.ibb.co/7CSSwnT/1.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sweater;