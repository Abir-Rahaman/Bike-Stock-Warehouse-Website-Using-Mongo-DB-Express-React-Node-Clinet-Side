import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section mt-5'>
            <section className="footer ">
        <div className=" footer-row p-5">
        
        <div className="product">
            <h3 className="orange">Our Product</h3>
            <p className='text-white'> recent Bike</p>
            <p className='text-white'>Rejected Bike</p>
            <p className='text-white'>Old Fashion Bike</p>
            <p className='text-white'>Customization Bike</p>
            <p className='text-white'>Discount Available Bike </p>

        </div>
        <div className="product">
            <h3 className="orange"> Over View </h3>
            <p className='text-white'>Short Delivery</p>
            <p className='text-white'>Precious Ratings</p>
            <p className='text-white'>Customer Review</p>
            <p className='text-white'> Comments By User</p>
            <p className='text-white'> Door Delivery Confirm</p>

        </div>
        <div className="product">
            <h3 className="orange">Resource & Solution</h3>
            <p className='text-white'>Pricing</p>
            <p className='text-white'>Themes</p>
            <p className='text-white'>Services</p>
            <p className='text-white'>Contact Us</p>
            <p className='text-white'> Help Center </p>

        </div>
        <div className="mail mt-5 pt-5">
            <h3 className="orange">abir@gmail.com</h3>
            <h3 className="orange">esrah@gmail.com</h3>
            <h3 className="orange">company@gmail.com</h3>
            

        </div>
        <div>
            <button className="btn btn-outline-dark fw-bolder fs-5 px-5 py-3 " type="submit"> See Products </button>
        </div>
    </div>
    </section>
        </div>
    );
};

export default Footer;