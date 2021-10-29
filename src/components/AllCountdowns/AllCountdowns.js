import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AllCountdowns = () => {
    return (
        <Row>
            <Col>
            <h2>Registered Travelers</h2>
            </Col>
            <Col>
            <h2>Active Eployees</h2>
            </Col>
            <Col>
            <h2>Total Plans</h2>
            </Col>
            <Col>
            <h2>Reviews</h2>
            </Col>
        </Row>
    );
};

export default AllCountdowns;