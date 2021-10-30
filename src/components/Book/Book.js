import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Book = () => {
    const {id} = useParams();
    const [tour, setTour] = useState({});
    useEffect(()=> {
        fetch('/featuredplans.json')
        .then(res => res.json())
        .then(data => {
            const getPlan = data.find(item => item.id === id)
            setTour(getPlan)
        })
    },[])
    return (
        <Row className="container mx-auto my-5 shadow-sm">
            <Col md={6}>
                <img src={tour.img} alt="" />
            </Col>
            <Col md={6}>
                <h2>{tour.place}</h2>
                <p>{tour.description}</p>
                <p>{tour.date}</p>
                <span>Price: {tour.cost}</span>
                <Link to="/success" className="btn btn-danger">Book Now</Link>
            </Col>
        </Row>
    );
};

export default Book;