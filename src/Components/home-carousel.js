import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Aisle4_2 from '../images/Aisle4_2.jpg';
import BPKG_1 from '../images/BPKG_1.jpg';
import BPKG_2 from '../images/BPKG_2.jpg';
import DCF_1 from '../images/DCF_1.jpg';

const HomeCarousel = () => {
    return (
        <Carousel>
                <Carousel.Item>
                   <Image
                    className="d-block w-100"
                    src={Aisle4_2}
                    alt="First slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={BPKG_1}
                        alt="Second slide"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={DCF_1}
                        alt="Third slide"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={BPKG_2}
                        alt="Fourth slide"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>
    );
};

export default HomeCarousel;