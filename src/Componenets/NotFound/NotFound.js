import React from 'react';
import notFound from '../../asset/notFound.png'

const NotFound = () => {
    return (
        <section className='ms-5 ps-5 mt-5 mb-5  container'>
         <div className='ms-5 ps-5 d-flex'>
            <img className='ps-5 ms-5 w-50' src={notFound} alt="" />
        </div>
     </section>
    );
};

export default NotFound;