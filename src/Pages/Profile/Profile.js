import React from 'react';
import '../Style/Style.css';
const Profile = () => {
    return (
        <div>
            <div className='mt-5 pt-3 container section-Head'>
                <div className='text-center headerWidth'><h2 className='mt-3 mb-5'>Companies</h2></div>
                <div className='company-content mb-5'>
                <div className='left-company'>
                    <h5>Textile</h5>
                    <p>- Smart Apparels Ltd.</p>
                </div>
                <div className='left-company '>
                    <h5>Retail</h5>
                    <a className='eleven' href="https://www.facebook.com/elevenclothingshop">- ELEVEN</a>
                </div>
                <div className='right-company'>
                    <h5>Fragrance</h5>
                    <p>- Assurance Fragrance</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;