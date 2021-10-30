import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tours from './Tours';

const FeaturedTours = () => {

    const [tours, setTours] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/tours')
        .then(res => res.json())
        .then(data => setTours(data))

    },[])

    return (
        <div>
            <h1 className="font-normal font-serif mt-5">Featured Tours</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto">
                {tours.slice(0,6).map(plans => <Tours key={plans._id} plans={plans}></Tours>)}
            </Row>
        </div>
    );
};

export default FeaturedTours;