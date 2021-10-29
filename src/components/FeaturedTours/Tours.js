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
                    {plans.description}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Tours;