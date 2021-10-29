import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Tours = ({plans}) => {
    console.log(plans);
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={plans.img} />
                <Card.Body>
                <Card.Title>{plans.place}</Card.Title>
                <Card.Text>
                    {plans.description.slice(0,150)}
                </Card.Text>
                <button className="btn btn-success">See Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Tours;