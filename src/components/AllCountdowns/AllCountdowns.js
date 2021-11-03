import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AllCountdowns = () => {
    return (
        <div className="bg-gray-100 py-5">
            <Row className="container mx-auto">
                <Col>
                <h4 className="font-normal text-blue-700">Registered Travelers</h4>
                <h2 className="text-blue-500">458</h2>
                </Col>
                <Col>
                <h4 className="font-normal text-blue-700">Active Eployees</h4>
                <h2 className="text-blue-500">12</h2>
                </Col>
                <Col>
                <h4 className="font-normal text-blue-700">Total Plans</h4>
                <h2 className="text-blue-500">42</h2>
                </Col>
                <Col>
                <h4 className="font-normal text-blue-700">Reviews</h4>
                <h2 className="text-blue-500">890</h2>
                </Col>
            </Row>
        </div>
    );
};

export default AllCountdowns;