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
                    Tour guides should be able to explain facts, history, landmarks, figures, local customs and more. They should also be able to answer additional tour related questions that may come up during the trip. Knowledgeable guides can help make your trip insightful and memorable.
                </Col>
            </Row>
            <Row xs={1} md={2} className="container mx-auto my-5 shadow">
                <Col>
                    <h2 className="mt-10">Best Hotels To Stay</h2>
                    A Luxury Hotel is considered a hotel that provides a luxurious accommodation experience to the guest. There are no set standards such as stars, for luxury hotels. Often 4 or 5-star hotels describe themselves as ‘luxury’. This also means that any accommodation type can use the term ‘luxury’. including boutique hotels, resorts, and B&Bs.
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
                    The origin of the word "travel" is most likely lost to history. The term "travel" may originate from the Old French word travail, which means 'work'. According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen which means to torment, labor, strive, journey and earlier from Old French travailler which means to work strenuously, toil.In English, people still occasionally use the words travail, which means struggle.
                </Col>
            </Row>
        </div>
    );
};

export default WeSpecial;



