import React from 'react';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Events></Events>
        </div>
    );
};

export default Home;