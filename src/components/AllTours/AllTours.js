import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useFetchItems from '../../hooks/useFetchItems';
import Tours from '../FeaturedTours/Tours';

const AllTours = () => {

    const {tours} = useFetchItems();

    // const [tours, setTours] = useState([]);

    // useEffect(()=>{
    //     fetch('./featuredplans.json')
    //     .then(res => res.json())
    //     .then(data => setTours(data))
    // }
    //     ,[]);
    console.log(tours);
    return (
        <div>
            <h1 className="font-normal font-serif mt-5">Featured Tours</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto">
                {tours.map(plans => <Tours plans={plans}></Tours>)}
            </Row>
            
        </div>
    );
};

export default AllTours;