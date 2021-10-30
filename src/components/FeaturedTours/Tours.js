import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tours = ({plans}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={plans.img} />
                <Card.Body>
                <Card.Title>{plans.place}</Card.Title>
                <Card.Text>
                    {plans.description.slice(0,150)}
                </Card.Text>
                <Link to={`/book/${plans.id}`} className="btn btn-success">Book Now</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Tours;