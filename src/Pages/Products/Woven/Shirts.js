import React from 'react';
import Header from '../../Share/Header/Header'

const Shirts = () => {
    return (
        <div>
            <div className="container mt-5 pt-5 Product-head">
                <h2 className='text-center'>Shirts</h2>
                <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col ">
                        <img
                            src="https://i.ibb.co/WDFf4k3/3.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                        <img
                            src="https://i.ibb.co/J7Xhrtb/5.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div className="col ">
                        <img
                            src="https://i.ibb.co/xjXCyBv/4.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />

                        <img
                            src="https://i.ibb.co/FYLqHRs/1.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>

                    <div className="col ">
                        <img
                            src="https://i.ibb.co/yYJD2CH/2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shirts;