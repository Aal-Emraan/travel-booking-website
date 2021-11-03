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
                  <h3 className="text-5xl mb-5">Explore The World</h3>
                  <p className="text-2xl mb-4">See beach is wonder of creator. It can make us feel great. Visit every sea beach with us to get the best services.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/SDTKZD5/beautiful-panoramic-shot-cliffs-with-calm-sea.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3 className="text-5xl mb-5">Travel Your Dreamland</h3>
                  <p className="text-2xl mb-4">See the world with your own eyes live. Explore every possible things you see to enjoy the beauty of nature.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/jgCy1T9/river-surrounded-by-forests-cloudy-sky-thuringia-germany.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 className="text-5xl mb-5">See The Beauty Of Nature</h3>
                  <p className="text-2xl mb-4">Natural beauty is something god gifted which is completely impossible for human to make. Enjoy every moment throughout our travelling agency.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;