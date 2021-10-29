import React from 'react';
import { Carousel } from 'react-bootstrap';




const Banner = () => {
    return (
        <div>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/rkbGGQC/aerial-beautiful-shot-seashore-with-hills-background-sunset.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="text-xl">Explore The World</h3>
                  <p className="text-5xl">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/SDTKZD5/beautiful-panoramic-shot-cliffs-with-calm-sea.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/jgCy1T9/river-surrounded-by-forests-cloudy-sky-thuringia-germany.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;