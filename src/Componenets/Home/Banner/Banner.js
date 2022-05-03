import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='full-banner pt-5 bg-white container'>
          <h1 className='banner-title p-5 fw-bolder'> Bike Stock BD </h1>
          <h1 className='banner-title ps-5 m-auto '> See 5k+ Bike In Our <br /> <span className='banner-text'> Warehouse</span> </h1>
          <button className="btn btn-outline-dark fw-bolder fs-5 px-5 py-3 p m-5 " type="submit"> Contact Us</button>
        </div>
    );
};

export default Banner;