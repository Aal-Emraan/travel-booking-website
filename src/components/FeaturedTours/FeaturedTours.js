import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Tours from './Tours';

const FeaturedTours = () => {

    const [tours, setTours] = useState([]);

    useEffect(()=> {
        fetch('https://dry-beach-57081.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))

    },[]);
    if(tours.length === 0){
        return <Spinner animation="grow" variant="primary" />
    }

    return (
        <div>
            <h1 className="font-normal font-serif mt-5 text-4xl">Featured Tours</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto">
                {tours.map(plans => <Tours key={plans._id} plans={plans}></Tours>)}
            </Row>
        </div>
    );
};

export default FeaturedTours;