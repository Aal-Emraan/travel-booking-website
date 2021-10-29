import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AllCountdowns = () => {
    return (
        <div className="bg-gray-100 py-5">
            <Row className="container mx-auto">
                <Col>
                <h4>Registered Travelers</h4>
                <h2>458</h2>
                </Col>
                <Col>
                <h4>Active Eployees</h4>
                <h2>12</h2>
                </Col>
                <Col>
                <h4>Total Plans</h4>
                <h2>42</h2>
                </Col>
                <Col>
                <h4>Reviews</h4>
                <h2>890</h2>
                </Col>
            </Row>
        </div>
    );
};

export default AllCountdowns;