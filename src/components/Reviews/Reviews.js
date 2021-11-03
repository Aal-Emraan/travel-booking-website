import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Reviews = () => {
    return (
        <div className="py-5">
            <h3 className="text-3xl">Top Reviews</h3>
            <Row xs={1} md={3} className="container mx-auto">
                <Col>
                    <Card className="border-0  shadow-sm">
                        <Card.Img className="w-50 rounded-circle mx-auto my-4" variant="top" src="https://i.ibb.co/0BC5VBx/review1.jpg" />
                        <Card.Body>
                        <Card.Title>Jenifar Watson</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>`
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0  shadow-sm">
                        <Card.Img className="w-50 rounded-circle mx-auto my-4"  variant="top" src="https://i.ibb.co/PZw4G9D/review2.jpg" />
                        <Card.Body>
                        <Card.Title>Willium Lin</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>`
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0  shadow-sm">
                        <Card.Img className="w-50 rounded-circle mx-auto my-4"  variant="top" src="https://i.ibb.co/s9MFPth/review3.jpg" />
                        <Card.Body>
                        <Card.Title>James Camaron</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>`
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Reviews;



