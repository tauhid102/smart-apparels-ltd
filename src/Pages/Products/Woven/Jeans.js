import React from 'react';

const Jeans = () => {
    return (
        <div>
            <div className="container mt-5 pt-5 Product-head">
                <h2 className='text-center'>Jeans</h2>
                <div className="imageGallery row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col ">
                        <img
                            src="https://i.ibb.co/D5wJYpp/3.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    <div className="col ">
                        <img
                            src="https://i.ibb.co/4SHTz6C/2.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />
                    </div>
                    <div className="col ">
                        <img
                            src="https://i.ibb.co/tzTm0hV/1.jpg"
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jeans;