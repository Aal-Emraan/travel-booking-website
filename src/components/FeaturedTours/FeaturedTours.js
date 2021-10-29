import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tours from './Tours';

const FeaturedTours = () => {

    const [featuredPlans, setFeaturedPlans] = useState([]);

    useEffect(() => {
        fetch('./featuredplans.json')
        .then(res => res.json())
        .then(data => setFeaturedPlans(data))
    },[])

    console.log(featuredPlans);
    return (
        <div>
            <h1 className="font-normal font-serif">Featured Tours</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto">
                {featuredPlans.map(plans => <Tours plans={plans}></Tours>)}
            </Row>
        </div>
    );
};

export default FeaturedTours;