import React from 'react';
import { Col, Row } from 'react-bootstrap';

const WeSpecial = () => {
    return (
        <div className="my-5">
            <h1 className="text-4xl">We We Are So Special?</h1>
            <Row xs={1} md={2} className="container mx-auto my-5 shadow">
                <Col md={5}>
                    <img src="https://i.ibb.co/WpNJx0X/Guide-and-group-of-tourists-listening-her-and-having-an-excursion-vector-illustration-in-flat-design.jpg" alt="" />
                </Col>
                <Col>
                    <h2 className="mt-10">Our Professional Guides</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi molestiae ipsum repellat sunt recusandae architecto quas doloribus minima illo nesciunt soluta odio accusantium id at blanditiis amet quidem dolorum in sapiente quae ullam velit, incidunt alias. Magnam dignissimos provident similique quas dolorem? Assumenda facere reprehenderit, temporibus nihil labore beatae.
                </Col>
            </Row>
            <Row xs={1} md={2} className="container mx-auto my-5 shadow">
                <Col>
                    <h2 className="mt-10">Best Hotels To Stay</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi molestiae ipsum repellat sunt recusandae architecto quas doloribus minima illo nesciunt soluta odio accusantium id at blanditiis amet quidem dolorum in sapiente quae ullam velit, incidunt alias. Magnam dignissimos provident similique quas dolorem? Assumenda facere reprehenderit, temporibus nihil labore beatae.
                </Col>
                <Col md={5}>
                    <img src="https://i.ibb.co/1sync7g/2n.jpg" alt="" />
                </Col>
            </Row>
            <Row xs={1} md={2} className="container mx-auto my-5 shadow">
                <Col md={5}>
                    <img src="https://i.ibb.co/cgBWx9g/3.png" alt="" />
                </Col>
                <Col>
                    <h2 className="mt-10">Premium Class Travlelling</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi molestiae ipsum repellat sunt recusandae architecto quas doloribus minima illo nesciunt soluta odio accusantium id at blanditiis amet quidem dolorum in sapiente quae ullam velit, incidunt alias. Magnam dignissimos provident similique quas dolorem? Assumenda facere reprehenderit, temporibus nihil labore beatae.
                </Col>
            </Row>
        </div>
    );
};

export default WeSpecial;



