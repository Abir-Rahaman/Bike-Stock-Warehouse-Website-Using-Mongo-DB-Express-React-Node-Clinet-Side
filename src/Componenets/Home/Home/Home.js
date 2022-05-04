import React from 'react';
import Bikes from '../../Bikes/Bikes';
import Banner from '../Banner/Banner';
import Events from '../Events/Events';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <Offer></Offer>
            <Events></Events>
        </div>
    );
};

export default Home;