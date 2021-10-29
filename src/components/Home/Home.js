import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedTours from '../FeaturedTours/FeaturedTours';
import WeSpecial from '../WeSpecial/WeSpecial';
import Reviews from '../Reviews/Reviews';
import AllCountdowns from '../AllCountdowns/AllCountdowns';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedTours></FeaturedTours>
            <WeSpecial></WeSpecial>
            <AllCountdowns></AllCountdowns>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;